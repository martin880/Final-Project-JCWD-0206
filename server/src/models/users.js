module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define(
		"Users",
		{
			name: Sequelize.STRING,
			username: Sequelize.STRING,
			phone: Sequelize.STRING,
			address: Sequelize.STRING,
			password: Sequelize.STRING,
			role: Sequelize.ENUM("admin", "user"),
			active: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			img_url: {
				type: Sequelize.STRING,
			},
		},
		{
			paranoid: true,
		}
	);
	return user;
};
