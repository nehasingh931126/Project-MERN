const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const fileUpload = require('../middleware/file-upload');
const userController = require("../controllers/users-controllers");
router.get("/", userController.getUsers);

router.post(
  "/signup",
  [fileUpload.single('image'),[
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ]],
  userController.signup
);

router.post("/login",[
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
  ], userController.login);

module.exports = router;
