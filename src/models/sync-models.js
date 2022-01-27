import { getKindStoreArray, getKindStoreWithLocationArray } from 'public_data/public-data-parser';
import { Store } from '.';
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
		const kindStoreArr = await getKindStoreArray();
		const kindStoreWithLocationArr = await getKindStoreWithLocationArray(kindStoreArr);

		await sequelize.models.Store.bulkCreate(kindStoreWithLocationArr, {
			include: [
				{
					association: Store.Location,
				},
			],
		});
	} catch (error) {
		console.error(error);
	}
}
