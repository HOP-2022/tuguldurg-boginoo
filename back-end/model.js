const { model, Schema } = require("mongoose");

const LinkScheme = new Schema({
  email: String,
  link: String,
  shortLink: String,
  date: { type: Date, default: Date.now },
});

const LinkModel = model("Link", LinkScheme);

module.exports = LinkModel;
