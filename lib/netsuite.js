var Client = this.require('./client');
var InventoryItems = require('./inventory_items');

module.exports = function(config) {
  this.client = new Client(config);
  this.InventoryItems = new InventoryItems(this.client);
};

