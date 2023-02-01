const { model, Schema } = require("mongoose");

const RoleScheme = new Schema({
  email: String,
  username: String,
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "superadmin"],
  },
  date: { type: Date, default: Date.now },
});

const RoleModel = model("Role", RoleScheme);

module.exports = RoleModel;
