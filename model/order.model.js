const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Order = new Schema(
  {
    _id: { type: Number },
    item: { type: String },
    price: { type: Number },
    quantity: { type: Number },
  },
  { timestamps: true },
  { collection: "Orders" }
);
module.exports = mongoose.model("Orders", Order);
