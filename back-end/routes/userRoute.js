const express = require("express");
const router = express.Router();
const { createUser, deleteUser } = require("../controller/userController");

// router.
// post("/", createUser);
//   .get("/", getUsers)
//   .get("/:id", getUser)
//   .delete("/", deleteUser);
module.exports = router;
