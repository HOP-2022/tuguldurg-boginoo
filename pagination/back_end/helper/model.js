const { model, Schema } = require("mongoose");

const DataScheme = new Schema({
  user: String,
  data: String,
  date: { type: Date, default: Date.now },
});

const DataModel = model("Data", DataScheme);

module.exports = DataModel;
