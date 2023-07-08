const axios = require("axios");

const rajaOngkirContorller = {
	getAllProvince: async (req, res) => {
		try {
			const result = await axios.get(
				"https://api.rajaongkir.com/starter/province",
				{
					headers: {
						key: "372e0adb26e2feae1f4ccf3c2f1ccb3a",
					},
				}
			);
			res.send(result.data);
		} catch (err) {
			console.log(err);
			res.status(500).send({
				message: err.message,
			});
		}
	},
	getAllCity: async (req, res) => {
		try {
			const result = await axios.get(
				"https://api.rajaongkir.com/starter/city",
				{
					headers: {
						key: "372e0adb26e2feae1f4ccf3c2f1ccb3a",
					},
				}
			);
			res.send(result.data);
		} catch (err) {
			console.log(err);
			res.status(500).send({
				message: err.message,
			});
		}
	},
	getCost: async (req, res) => {
		try {
			const { origin, destination, weight, courier } = req.body;
			const result = await axios.post(
				"https://api.rajaongkir.com/starter/cost",
				{
					origin: origin,
					destination: destination,
					weight: weight,
					courier: courier,
				},
				{
					headers: {
						key: "372e0adb26e2feae1f4ccf3c2f1ccb3a",
					},
				}
			);
			res.send(result.data);
		} catch (err) {
			res.status(500).send({
				message: err.message,
			});
		}
	},
};

module.exports = rajaOngkirContorller;
