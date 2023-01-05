const express = require("express");
const router = express.Router();
const {
  getLinks,
  getLink,
  createLink,
  deleteLink,
} = require("../controller/linkController");

router.post("/", createLink).get("/", getLinks).delete("/:ids", deleteLink);
// .get("/:id", getLink)
module.exports = router;
