const db = require("../models");
const { Op } = require("sequelize");
const { Category } = require("../models");

const productControllers = {
	getAll: async (req, res) => {
		try {
			await db.Product.findAll().then((result) => res.send(result));
		} catch (err) {
			console.log(err);
			res.status(500).send({
				message: err.message,
			});
		}
	},
	insert: async (req, res) => {
		try {
			console.log(req.file);
			const { name, price, category_id } = req.body;
			const { filename } = req.file;
			await db.Product.create({
				name,
				price,
				img_url: process.env.product_img + filename,
				category_id,
			}).then((result) => res.send(result));
		} catch (err) {
			return res.status(500).send({
				message: err.message,
			});
		}
	},
	getProduct: async (req, res) => {
		try {
			const { category_id, search } = req.query;
			const Clause = {};
			if (category_id) {
				Clause.category_id = category_id;
			}
			if (search) {
				Clause.name = {
					[Op.like]: `%${search}%`,
				};
			}
			const products = await db.Product.findAll({
				where: Clause,
			});
			res.send({
				products: products,
			});
		} catch (err) {
			console.log(err);
			res.status(500).send({
				message: err.message,
			});
		}
	},
	getProductDraft: async (req, res) => {
		try {
			const { limit, offset, column, sort, category_id, search } = req.query;
			const whereClause = {};
			let totalCount;
			let totalPages;
			let orderClause;
			if (category_id) {
				whereClause.category_id = category_id;
			}
			if (search) {
				whereClause.name = {
					[Op.like]: `%${search}%`,
				};
			}

			if (column === "category") {
				orderClause = [[db.Category, column, sort]];
			} else if (column) {
				orderClause = [[column, sort]];
			}

			if (limit) {
				totalCount = await db.Product.count({
					include: [
						{
							model: db.Category,
						},
					],
					where: whereClause,
				});
				totalPages = Math.ceil(totalCount / limit);
			}

			const products = await db.Product.findAll({
				include: [
					{
						model: db.Category,
					},
				],
				where: whereClause,
				order: orderClause,
				limit: limit ? Number(limit) : null,
				offset: offset ? Number(offset) : null,
			});
			console.log(products);
			res.send({
				products: products,
				totalPages: totalPages,
				totalCount: totalCount,
			});
		} catch (err) {
			console.log(err);
			res.status(500).send({
				message: err.message,
			});
		}
	},
	deleteProduct: async (req, res) => {
		try {
			await db.Product.destroy({
				where: {
					id: req.params.id,
				},
			});
			return res.status(200).send({
				message: "Product berhasil dihapus",
			});
		} catch (error) {
			res.status(500).send({
				message: error.message,
			});
		}
	},
	editProduct: async (req, res) => {
		try {
			const { name, price, category_id } = req.body;
			const { filename } = req.file;
			await db.Product.update(
				{
					name,
					price,
					category_id,
					img_url: process.env.product_img + filename,
				},
				{
					where: {
						id: req.params.id,
					},
				}
			).then((result) => res.send(result));
		} catch (err) {
			console.log(err.message);
			return res.status(500).send({ message: err.message });
		}
	},
};
module.exports = productControllers;
