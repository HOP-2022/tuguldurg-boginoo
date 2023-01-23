const { model, Schema } = require("mongoose");

const LinkScheme = new Schema({
  link: String,
  shortLink: String,
  token: String,
  date: { type: Date, default: Date.now },
});

const LinkModel = model("Link", LinkScheme);

module.exports = LinkModel;
