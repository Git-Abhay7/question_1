var router = require("express").Router();
const profileController = require("../controller/profileController");

router.post("/profile", profileController.profile);

module.exports = router;
