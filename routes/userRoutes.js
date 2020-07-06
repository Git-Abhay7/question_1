var router = require("express").Router();

var usercontroller = require("../controller/userController");

router.post("/addUser", usercontroller.signUp);

module.exports = router;
