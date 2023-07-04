const express = require("express");
const router = express.Router();
const productControllers = require("../controllers").productControllers;
const { fileUploader, upload } = require("../middlewares/multer");

router.get("/", productControllers.getProduct);
router.get("/Draft", productControllers.getProductDraft);
router.get("/all", productControllers.getAll);
router.delete("/:id", productControllers.deleteProduct);
router.post(
	"/",
	fileUploader({ destinationFolder: "productImg" }).single("productImg"),
	productControllers.insert
);
router.patch(
	"/:id",
	fileUploader({
		destinationFolder: "productImg",
	}).single("productImg"),
	productControllers.editProduct
);

module.exports = router;
