const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
router.post("/add-product", adminController.addProduct);
router.get("/show-product", adminController.getProduct);
router.get("/delete-product/:id", adminController.deleteProduct);


module.exports = router;