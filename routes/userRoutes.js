var router = require("express").Router();
const {create} = require("../validators/user");
var usercontroller = require("../controller/userController");
const {validation} = require("../commonFunction/validationFun");
router.post("/addUser", [create(), validation], usercontroller.signUp);

module.exports = router;
