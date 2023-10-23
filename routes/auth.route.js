var express = require("express");
const AuthController = require("../controller/auth.controller");
var router = express.Router();
router.post("/", AuthController.login);
module.exports = router;
