module.exports = (sequelize, Sequelize) => {
	const tokens = sequelize.define(
		"tokens",
		{
			token: {
				type: Sequelize.STRING,
			},
			expired: {
				type: Sequelize.DATE,
			},
			payload: {
				type: Sequelize.STRING,
			},
			valid: {
				type: Sequelize.BOOLEAN,
				defaultValue: true,
			},
			status: {
				type: Sequelize.ENUM("LOGIN", "FORGOT-PASSWORD", "VERIFY"),
			},
		},
		{
			paranoid: true,
		}
	);
	return tokens;
};
