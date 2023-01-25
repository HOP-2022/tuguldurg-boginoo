const { model, Schema } = require("mongoose");

const LinkScheme = new Schema({
  link: String,
  shortLink: String,
  date: { type: Date, default: Date.now },
  owner: { type: Schema.ObjectId, ref: "User" },
});

const LinkModel = model("Link", LinkScheme);

module.exports = LinkModel;
