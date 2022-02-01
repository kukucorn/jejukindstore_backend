import { StoreDao } from 'daos';

async function findAll() {
	return await StoreDao.findAll();
}

async function findById(storeId) {
	return await StoreDao.findById(storeId);
}

async function search(name) {
	return await StoreDao.findByName(name);
}

export default { findAll, findById, search };
