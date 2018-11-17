

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},

		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		gender: {
			type: Sequelize.ENUM('male', 'female'),
		},
		user_image: {
			type: Sequelize.STRING,
			allowNull: true,
		},
		mobile_number: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
		last_login_date: {
			type: Sequelize.DATE,
		},
		created_at: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updated_at: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		role_id: {
			type: Sequelize.INTEGER,
			onDelete: 'NO ACTION',
			references: {
				model: 'Roles',
				key: 'id',
			},
		},

	}),
	down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
