import { Sequelize, DataTypes } from 'sequelize';

import { database, user, password, host, dialect } from 'configs/database.js';

const sequelize = new Sequelize(database, user, password, {
	host,
	dialect,
});

(async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

export default sequelize;
