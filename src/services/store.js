import { StoreDao } from 'daos';

async function findAll() {
	return await StoreDao.findAll();
}

async function findById(storeId) {
	return await StoreDao.findById(storeId);
}

export default { findAll, findById };
