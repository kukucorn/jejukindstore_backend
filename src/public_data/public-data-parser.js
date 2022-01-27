import fs from 'fs';

import fetch from 'node-fetch';
import iconv from 'iconv-lite';
import csvtojson from 'csvtojson';

import { StoreDao } from 'daos';
import { GEOCODING_API_V2, CLIENT_ID, CLIENT_SECRET } from 'configs/map-app';

export async function getKindStoreArray() {
	const originalCsvFilePath = `${process.cwd()}/src/public_data/assets/jeju_20210615.csv`;

	let content = fs.readFileSync(originalCsvFilePath);

	let uft8Content = iconv.decode(Buffer.from(content), 'CP949');

	let json = await csvtojson().fromString(uft8Content);

	const storePropsMap = {
		업소명: 'name',
		업종: 'category',
		지역: 'region',
		연락처: 'contact',
		주소: 'address',
		영업시간: 'businessHours',
		데이터기준일자: 'createdAt',
	};

	const storeList = json.map((value, index) => {
		let newObj = {};
		for (const key in value) {
			let propName;
			if ((propName = storePropsMap[key])) newObj[propName] = value[key];
		}
		return newObj;
	});

	return storeList;
}

export async function getKindStoreLocationArray() {
	const kindStoreArr = await StoreDao.findAll();

	const kindStoreLocationArr = await Promise.all(
		kindStoreArr.map(async (store) => {
			try {
				const query = `?query=${store.address}`;
				const reqUrl = GEOCODING_API_V2 + query;

				const res = await fetch(reqUrl, {
					method: 'GET',
					headers: {
						'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
						'X-NCP-APIGW-API-KEY': CLIENT_SECRET,
					},
				});

				const data = await res.json();

				return data
					? {
							storeId: store.id,
							latitude: data?.addresses[0]?.y || 0.0,
							longitude: data?.addresses[0]?.x || 0.0,
					  }
					: {
							storeId: store.id,
							latitude: 0.0,
							longitude: 0.0,
					  };
			} catch (error) {
				console.error(error);
			}
		})
	);

	return kindStoreLocationArr;
}
