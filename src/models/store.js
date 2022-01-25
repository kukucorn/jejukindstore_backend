export default (sequelize, DataTypes) =>
	sequelize.define(
		'Store',
		{
			store_id: {
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
			business_hours: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
		},
		{
			timestamps: false,
			tableName: 'store',
		}
	);
