var router = require("express").Router();
const { validation } = require("../commonFunction/validationFun");
const { create_2 } = require("../validators/user");

const profileController = require("../controller/profileController");

router.post("/profile", [create_2(), validation], profileController.profile);

module.exports = router;
