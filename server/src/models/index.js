"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 &&
			file !== basename &&
			file.slice(-3) === ".js" &&
			file.indexOf(".test.js") === -1
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.addresses = require("./address")(sequelize, Sequelize);
db.carts = require("./cart");
db.categories = require("./category");
db.orders = require("./order");
db.orderDetails = require("./orderDetail");
db.products = require("./product");
db.productImages = require("./productImage");
db.stocks = require("./stock");
db.stockHistories = require("./stockHistorie");
db.stockMutation = require("./stockMutation");
db.tokens = require("./token");
db.users = require("./user");
db.warehouses = require("./warehouse");

module.exports = db;
