module.exports = (sequelize, Sequelize) => {
	const product = sequelize.define(
		"Products",
		{
			name: Sequelize.STRING,
			details: Sequelize.STRING,
			price: Sequelize.INTEGER,
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
