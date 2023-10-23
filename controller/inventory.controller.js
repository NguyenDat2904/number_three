const Inventory = require("../model/inventory.model");

class InventoryController {
  async gettingAll(req, res) {
    try {
      const { lowQuantity } = req.query;
      let inventories;
      if (lowQuantity) {
        inventories = await Inventory.find({ instock: { $lt: 100 } });
      } else {
        inventories = await Inventory.find();
      }

      if (!inventories) {
        return res
          .status(400)
          .json({ message: "Không tồn tại sản phẩm nào trong kho" });
      }
      res.status(200).json(inventories);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new InventoryController();
