const express = require("express");
const router = express.Router();
const rajaOngkirContorller = require("../controllers").rajaOngkirContorller;

router.get("/province/", rajaOngkirContorller.getAllProvince);
router.get("/city/", rajaOngkirContorller.getAllCity);

module.exports = router;
