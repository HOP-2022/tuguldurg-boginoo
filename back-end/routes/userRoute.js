const express = require("express");
const router = express.Router();
const { signup, login } = require("../controller/userController");

router.post("/", signup).get("/", login);
module.exports = router;
