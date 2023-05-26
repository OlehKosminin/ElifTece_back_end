const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/products-controllers");

router.get("/:shop", ctrl.getProduct);

router.post("/", ctrl.getProductById);

module.exports = router;
