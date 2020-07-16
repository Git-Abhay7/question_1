var router = require("express").Router();
var usercontroller = require("../controller/userController");
var { create } = require("../validators/user");
var { validation } = require("../commonFunction/validationFun");
router.post("/addUser", [create(), validation], usercontroller.signUp);

module.exports = router;
