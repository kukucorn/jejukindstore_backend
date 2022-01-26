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
		storeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: sequelize.models.Store,
				key: 'id',
			},
		},
	};

	sequelize.define(modalName, columns, {
		tableName,
		underscored: true,
		timestamps: false,
	});
};
