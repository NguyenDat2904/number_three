const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema(
  {
    username: { type: String },
    password: { type: String },
  },
  { timestamps: true },
  { collection: "Users" }
);
module.exports = mongoose.model("Users", User);
