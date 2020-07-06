var router = require("express").Router();
const { check, validationResult } = require("express-validator");

const profileController = require("../controller/profileController");

router.post("/profile", [check('user_id').notEmpty().withMessage("Please provide userId"),check('mobileNumber').isLength({min:10}).notEmpty().withMessage("Please provide mobileNumber")], profileController.profile);

module.exports = router;
