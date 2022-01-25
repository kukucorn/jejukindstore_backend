import { StoreDao } from 'daos';

async function findAll() {
	return await StoreDao.findAll();
}

export default { findAll };
