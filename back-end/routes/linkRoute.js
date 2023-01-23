const express = require("express");
const router = express.Router();
const {
  getLinks,
  getLink,
  createLink,
  deleteLink,
} = require("../controller/linkController");

router
  .post("/", createLink)
  .get("/", getLinks)
  .get("/:id", getLink)
  .delete("/", deleteLink);
module.exports = router;
