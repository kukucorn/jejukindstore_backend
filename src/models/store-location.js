export default (sequelize, DataTypes) => {
	const modalName = 'StoreLocation';
	const tableName = 'store_location';
	const columns = {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		latitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		longitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
	};

	sequelize.define(modalName, columns, {
		tableName,
		underscored: true,
		timestamps: false,
	});
};
