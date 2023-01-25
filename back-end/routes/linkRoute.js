const { application } = require("express");
const express = require("express");
const router = express.Router();
// const auth = require("../middlewares/auth");
const {
  getLinks,
  getLink,
  createLink,
  deleteLink,
} = require("../controller/linkController");

// app.use(auth);
router
  .post("/", createLink)
  .get("/", getLinks)
  .get("/:id", getLink)
  .delete("/", deleteLink);
module.exports = router;
