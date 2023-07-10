const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const router = require("./routers");
const db = require("./models");
// db.sequelize.sync({ alter: true });
// db.sequelize.sync({ force: true });

app.use("/rajaOngkir", router.rajaOngkirRouter);

app.listen(PORT, () => {
	console.log(`server is running on PORT ${PORT}`);
});
