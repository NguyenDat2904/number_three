var express = require("express");
const OrderController = require("../controller/order.controller");
const authMdw = require("../middleware/auth.mdw");

var router = express.Router();
router.get("/", authMdw, OrderController.getOrders);
module.exports = router;
