import { StoreModel } from 'models';

async function findAll() {
	return await StoreModel.findAll();
}

export default { findAll };
