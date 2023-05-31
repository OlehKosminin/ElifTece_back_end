const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/history-controllers");
const { schemas } = require("../../models/history");
const validateBody = require("../../decorators/validateBody");

router.get("/", ctrl.getOrder);

router.get("/:phone", ctrl.getOrderByNumb);

router.post("/upd-history", validateBody(schemas.addSchema), ctrl.addHistory);

module.exports = router;
