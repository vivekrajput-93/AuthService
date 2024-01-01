const express = require("express");

const { AuthValidator } = require("../../Middlewares/index");

const router = express.Router();

const UserController = require("../../Controllers/user-controller");

router.post("/signup", AuthValidator.validateAuth, UserController.create);

router.post("/signin", AuthValidator.validateAuth, UserController.signIn);

router.get("/isAuthenticated", UserController.isAuthenticated);

router.get("/isAdmin", AuthValidator.validateIsAdminRequest, UserController.isAdmin);

module.exports = router;
