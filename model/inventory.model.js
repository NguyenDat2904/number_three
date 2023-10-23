const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Inventory = new Schema(
  {
    _id: { type: Number },
    sku: { type: String },
    description: { type: String },
    instock: { type: Number },
  },
  { timestamps: true },
  { collection: "Inventorys" }
);
module.exports = mongoose.model("Inventorys", Inventory);
