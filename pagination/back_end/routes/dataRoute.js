const express = require("express");
const router = express.Router();
const {
  getDatas,
  getData,
  createData,
  deleteData,
} = require("../controller/dataController");

router
  .post("/", createData)
  .get("/", getDatas)
  //   .get("/:id", getData)
  .delete("/", deleteData);
module.exports = router;
