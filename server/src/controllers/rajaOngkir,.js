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
			res.status(500).send({
				message: err.message,
			});
		}
	},
	getCitybyId: async (req, res) => {
		try {
			const { id } = req.params;
			const result = await axios.get(
				`https://api.rajaongkir.com/starter/city?province=${id}`,
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
