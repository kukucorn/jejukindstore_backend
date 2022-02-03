export default (sequelize, DataTypes) => {
	const modalName = 'Comment';
	const tableName = 'comment';
	const columns = {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		content: {
			type: DataTypes.STRING(500),
			allowNull: false,
		},
		storeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'store',
				key: 'id',
			},
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'user',
				key: 'id',
			},
		},
	};

	sequelize.define(modalName, columns, {
		tableName,
		underscored: true,
		timestamps: true,
	});
};
