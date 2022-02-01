import { Store, StoreLocation } from 'models';

async function findAll() {
	try {
		return await Store.findAll({
			include: { model: StoreLocation },
		});
	} catch (error) {
		console.error(error);
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
		console.error(error);
	}
}

async function findByName(name) {
	try {
		return await Store.findAll({
			where: {
				name,
			},
		});
	} catch (error) {
		console.error(error);
	}
}

export default { findAll, findById, findByName };
