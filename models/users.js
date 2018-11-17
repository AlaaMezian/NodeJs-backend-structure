

module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define('Users', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_image: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		mobile_number: {
			type: DataTypes.STRING,
		},
		gender: {
			type: DataTypes.ENUM('male', 'female'),
		},
		password: {
			type: DataTypes.STRING,
		},
		last_login_date: {
			type: DataTypes.DATE,
		},
		createdAt:
		{
			type: DataTypes.DATE, field: 'created_at',
		},
		updatedAt: {
			type: DataTypes.DATE, field: 'updated_at',
		},

	}, {});
	Users.associate = function (models) {
		Users.hasMany(models.Roles, {
			foreignKey: 'role_id',
		});
	};
	return Users;
};
