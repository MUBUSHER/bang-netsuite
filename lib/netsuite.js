'use strict';

var Client = require('./client');
var InventoryItems = require('./resources/inventory_items');
var Customers = require('./resources/customers');

module.exports = function(config) {
  this.client = new Client(config);
  this.InventoryItems = new InventoryItems(this.client);
  this.Customers = new Customers(this.client);
};

