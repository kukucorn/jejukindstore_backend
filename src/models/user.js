export default (sequelize, DataTypes) => {
	const modalName = 'User';
	const tableName = 'user';
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
		type: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		thirdAppId: {
			type: DataTypes.STRING(200),
			allowNull: true,
			comment: 'id in third application',
		},
	};

	sequelize.define(modalName, columns, {
		tableName,
		underscored: true,
		timestamps: true,
	});
};
