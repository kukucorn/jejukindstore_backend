import { Store } from 'models';

async function findAll() {
	try {
		return await Store.findAll();
	} catch (error) {
		console.log(error);
	}
}

export default { findAll };
