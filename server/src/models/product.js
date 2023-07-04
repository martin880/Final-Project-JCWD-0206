module.exports = (sequelize, Sequelize) => {
	const product = sequelize.define(
		"Products",
		{
			name: Sequelize.STRING,
			price: Sequelize.INTEGER,
			// role: Sequelize.ENUM("admin", "user"),
			// active: {
			// 	type: Sequelize.BOOLEAN,
			// 	defaultValue: false,
			// 	allowNull: false,
			// },
			img_url: {
				type: Sequelize.STRING,
				defaultValues: null,
			},
		},
		{
			paranoid: true,
		}
	);
	return product;
};
