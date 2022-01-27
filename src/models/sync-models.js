import { getKindStoreArray, getKindStoreLocationArray } from 'public_data/public-data-parser';
import sequelize from '../loaders/database';

export default async (sequelize) => {
	try {
		// options.force : 존재하는 테이블 제거
		await sequelize.sync({
			force: true,
		});

		await seeder();
	} catch (error) {
		console.error(error);
	}
};

async function seeder() {
	try {
		await sequelize.models.Store.bulkCreate(await getKindStoreArray());
		await sequelize.models.StoreLocation.bulkCreate(await getKindStoreLocationArray());
	} catch (error) {
		console.error(error);
	}
}
