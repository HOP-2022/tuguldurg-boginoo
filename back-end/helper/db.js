const mongoose = require("mongoose");
const uri =
  "mongodb+srv://tuguldur:Tuguldur1014@cluster0.dpzypjj.mongodb.net/?";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
