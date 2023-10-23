const inventoryModel = require("../model/inventory.model");
const orderModel = require("../model/order.model");

class OrderController {
  async getOrders(req, res) {
    try {
      const orders = await orderModel.find();
      const orderItems = orders.map((order) => order.item);
      const inventoryItems = await inventoryModel.find({
        sku: { $in: orderItems },
      });
      const inventoryMap = new Map();
      inventoryItems.forEach((item) => inventoryMap.set(item.sku, item));
      const ordersWithDescriptions = orders.map((order) => ({
        _id: order._id,
        item: order.item,
        price: order.price,
        quantity: order.quantity,
        description: inventoryMap.has(order.item)
          ? inventoryMap.get(order.item).description
          : "Description not available",
      }));
      res.status(200).json(ordersWithDescriptions);
    } catch (error) {
      res.status(400).json({ msg: "Lỗi" });
      return;
    }
  }
}
module.exports = new OrderController();
