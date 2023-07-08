const express = require("express");
const router = express.Router();
const rajaOngkirContorller = require("../controllers").rajaOngkirContorller;

router.get("/province/", rajaOngkirContorller.getAllProvince);
router.get("/city/", rajaOngkirContorller.getAllCity);
router.post("/cost", rajaOngkirContorller.getCost);

module.exports = router;
