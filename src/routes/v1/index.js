const express = require("express");

const router = express.Router();

const UserController = require("../../Controllers/user-controller")

router.post("/signup", UserController.create);

module.exports = router;