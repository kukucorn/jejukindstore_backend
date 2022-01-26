export default (sequelize, DataTypes) => {
	const modalName = 'StoreMenu';
	const tableName = 'store_menu';
	const columns = {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		price: {
			type: DataTypes.INTEGER,
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
