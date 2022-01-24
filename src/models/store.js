import sequelize from '../loaders/database.js';

async function findAll() {
	try {
		return await sequelize.models.Store.findAll();
	} catch (error) {
		console.log(error);
	}
}

export default { findAll };
