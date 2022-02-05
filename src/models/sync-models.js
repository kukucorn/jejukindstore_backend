import { getKindStoreArray, getKindStoreWithLocationArray } from 'public_data/public-data-parser';

export default async (sequelize) => {
	try {
		// options.force : 존재하는 테이블 제거
		await sequelize.sync({
			force: true,
		});

		await seeder(sequelize);
	} catch (error) {
		console.error(error);
	}
};

async function seeder(sequelize) {
	try {
		const kindStoreArr = await getKindStoreArray();

		const storedKindStoreArr = await sequelize.models.Store.bulkCreate(kindStoreArr);

		const kindStoreLocationArr = await getKindStoreWithLocationArray(storedKindStoreArr);

		await sequelize.models.StoreLocation.bulkCreate(kindStoreLocationArr);
	} catch (error) {
		console.error(error);
	}
}
