import storeModel from '../models/store.js';

async function findAll() {
	return await storeModel.findAll();
}

export default { findAll };
