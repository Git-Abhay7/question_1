var router = require("express").Router();
const { validation } = require("../commonFunction/validationFun");
const { valid } = require("../validators/user");

const profileController = require("../controller/profileController");
router.post("/profile", [valid(), validation], profileController.profile);
router.post("/avg-age", profileController.avgAge);

module.exports = router;
