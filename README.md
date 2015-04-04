# bang-netsuite

A set of NetSuite RESTlets and a REST client for interacting with them. 

All RESTlets are designed to be used by [bang](https://github.com/rbwsam/bang).


## Install

```
git clone git@github.com:rbwsam/bang-netsuite.git
cd bang-netsuite
npm install
```

1. Log in to your NetSuite account
2. Upload the files in `./restlets`
3. Create and deploy RESTlet scripts for each file
4. Update `lib/inventory_items.js` so ``SCRIPT`` and ``DEPLOY`` match the deploy URL.

## Documentation

### The client

```javascript
var NetSuite = require('bang/netsuite');

var ns = new NetSuite({
  email: 'YOUR NS EMAIL',
  password: 'YOUR NS PASSOWORD',
  company: 'YOUR NS COMPANY ID'
});
```

### Customers

```javascript
// Find customer with id 42
ns.customers.find(42).then(function(result) {
  console.log(result); The customer
}, function(err) {
  console.log(err);
});

// Create a customer that has great hair
var han = { firstname: 'Han', lastname: 'Solo' }
ns.customers.create(han).then(function(result) {
  console.log(result); // The customer
}, function(err) {
  console.log(err);
});
```

### Inventory Items

```javascript
// Get all Inventory Items (API limited to 1000)
ns.inventoryItems.find().then(function(result) {
  console.log(result); // Array of inventory items
}, function(err) {
  console.log(err);
});
```

### Sales Orders

```javascript
// Create a Sales Order
var so = {};
ns.salesOrders.create(so).then(function(result) {
  console.log(result); The sales order
}, function(err) {
  console.log(err);
});
```

## Test

```npm test```