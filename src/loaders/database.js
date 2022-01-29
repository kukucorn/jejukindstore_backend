import { Sequelize, DataTypes } from 'sequelize';

import dbConfig from 'configs/database.js';

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
	host: dbConfig.host,
	dialect: dbConfig.dialect,
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
