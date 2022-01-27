import { Store } from 'models';

async function findAll() {
	try {
		return await Store.findAll();
	} catch (error) {
		console.log(error);
	}
}

async function findById(storeId) {
	try {
		return await Store.findOne({
			where: {
				id: storeId,
			},
		});
	} catch (error) {
		console.log(error);
	}
}

export default { findAll, findById };
