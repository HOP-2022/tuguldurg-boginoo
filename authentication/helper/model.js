const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
  email: String,
  password: String,
  username: String,
  date: { type: Date, default: Date.now },
});

const UserModel = model("User", UserScheme);

module.exports = UserModel;
