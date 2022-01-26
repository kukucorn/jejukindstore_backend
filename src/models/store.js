export default (sequelize, DataTypes) => {
	const modalName = 'Store';
	const tableName = 'store';
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
		region: {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
		address: {
			type: DataTypes.STRING(200),
			allowNull: false,
		},
		contact: {
			type: DataTypes.STRING(45),
			defaultValue: null,
		},
		category: {
			type: DataTypes.STRING(45),
			allowNull: false,
		},
		businessHours: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		createdAt: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
	};

	sequelize.define(modalName, columns, {
		tableName,
		underscored: true,
		timestamps: false,
	});
};
