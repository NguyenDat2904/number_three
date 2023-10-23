const inventory = require("./inventory.route");
const auth = require("./auth.route");
const orders = require("./order.route");

function route(app) {
  app.use("/inventory", inventory);
  app.use("/auth", auth);
  app.use("/order", orders);
}
module.exports = route;
