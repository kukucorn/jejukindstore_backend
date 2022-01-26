import { getKindStoreArray } from 'public_data/public-data-parser';

export default async (sequelize) => {
	try {
		// options.force : 존재하는 테이블 제거
		await sequelize.sync({
			force: true,
		});

		await sequelize.models.Store.bulkCreate(await getKindStoreArray());
	} catch (error) {
		console.error(error);
	}
};
