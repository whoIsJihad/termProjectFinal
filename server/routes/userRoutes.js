// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Define user routes
router.post("/createUser", userController.createUser);

module.exports = router;
