import fs from 'fs';

import iconv from 'iconv-lite';
import csvtojson from 'csvtojson';
import mysql from 'mysql2';

import { host, user, password, database } from '../config/database.js';

const originalCsvFilePath = `${process.cwd()}/src/public_data/assets/jeju_20210615.csv`;

let content = fs.readFileSync(originalCsvFilePath);

let uft8Content = iconv.decode(Buffer.from(content), 'CP949');

// fs.writeFileSync(`${process.cwd()}/src/public_data/assets/jeju_20210615_utf8.csv`, uft8Content, { encoding: 'utf8' });

let connection = mysql.createConnection({
	host,
	user,
	password,
	database,
});

connection.connect(async (error) => {
	if (error) console.error(error);
	console.log('connect DB!!!');

	let json = await csvtojson().fromString(uft8Content);

	const storePropsMap = {
		업소명: 'name',
		업종: 'category',
		지역: 'region',
		연락처: 'contact',
		주소: 'address',
		영업시간: 'business_hours',
		데이터기준일자: 'created_at',
	};

	const storeList = json.map((value, index) => {
		let newObj = {};
		for (const key in value) {
			let propName;
			if ((propName = storePropsMap[key])) newObj[propName] = value[key];
		}
		return newObj;
	});

	console.log(storeList);

	storeList.forEach((store) => {
		const props = Object.keys(store).join(',');
		const values = Object.values(store);
		connection.query({
			sql: `INSERT INTO store (${props}) VALUES (${Array.from(Array(values.length), () => '?').join(',')})`,
			values,
		});
	});

	connection.end();
});
