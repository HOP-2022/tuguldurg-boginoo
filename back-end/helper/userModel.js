const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "superadmin"],
  },
  date: { type: Date, default: Date.now },
});

const UserModel = model("User", UserScheme);

module.exports = UserModel;
