var router = require("express").Router();
const { check, validationResult } = require("express-validator");

var usercontroller = require("../controller/userController");

router.post(
  "/addUser",
  [
    check("firstName").notEmpty().withMessage("Please fill firstName  field"),
    check("email").notEmpty().withMessage("Please fill Email field."),
    check("password")
      .notEmpty()
      .isLength({ min: 5 })
      .withMessage("Please fill password field with atleast length--> 5."),
  ],
  usercontroller.signUp
);

module.exports = router;
