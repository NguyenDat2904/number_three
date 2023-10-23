var express = require("express");
const InventoryController = require("../controller/inventory.controller");

var router = express.Router();
router.get("/",  InventoryController.gettingAll);
module.exports = router;
