import fs from 'fs';

import iconv from 'iconv-lite';
import csvtojson from 'csvtojson';

const originalCsvFilePath = `${process.cwd()}/src/public_data/assets/jeju_20210615.csv`;

export async function getKindStoreArray() {
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
