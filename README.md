# bang-netsuite

A set of NetSuite RESTlets and a REST client for interacting with them. 

All RESTlets are designed to be used by [bang](https://github.com/rbwsam/bang).


## Install

```
git clone git@github.com:rbwsam/bang-netsuite.git
npm install
```

## Use

```javascript
var NetSuite = require('bang/netsuite');

var ns = new NetSuite({
  email: 'YOUR NS EMAIL',
  password: 'YOUR NS PASSOWORD',
  company: 'YOUR NS COMPANY ID'
});

var customer = ns.customers.find(id);
var sales_order = ns.salesOrders.find(id);
var inventory_item = ns.inventoryItem.find(id);

var inventory_items = ns.inventoryItems.find(); // all

var customer = ns.customers.create({});
var sales_order = ns.salesOrders.create({});
var inventory_item = ns.inventoryItem.create({});
```

## Test

```npm test```