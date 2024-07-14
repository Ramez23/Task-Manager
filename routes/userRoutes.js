const express = require("express");
const userController = require("../controllers/userController");

const router = new express.Router();

router.post("/users", userController.createUser);
router.post("/users/login", userController.loginUser);

module.exports = router;
