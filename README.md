# bang-netsuite

A set of NetSuite RESTlets and a REST client for interacting with them. 

All RESTlets are designed to be used by [bang](https://github.com/rbwsam/bang).

## Install

```
npm install --save rbwsam/bang-netsuite
```

1. Login to your NetSuite account
2. Upload the files in `./restlets`
3. Create and deploy RESTlet scripts for each file
4. Update `SCRIPT` and `DEPLOY` for each class in `./lib/resources`

## Examples

### The client

```javascript
var NetSuite = require('bang-netsuite');

var ns = new NetSuite({
  email: 'YOUR NS EMAIL',
  password: 'YOUR NS PASSWORD',
  company: 'YOUR NS COMPANY ID'
});
```

### Customers

```javascript
// Find customer
ns.Customers.find(42).then(function(result) {
  console.log(result); The customer
}, function(err) {
  console.log(err);
});

// Create a customer
var han = { firstname: 'Han', lastname: 'Solo' }

ns.Customers.create(han).then(function(result) {
  console.log(result); // The persisted customer
}, function(err) {
  console.log(err);
});
```

### Inventory Items

```javascript
// Get all Inventory Items (API limited to 1000)
ns.InventoryItems.find().then(function(result) {
  console.log(result); // Array of inventory items
}, function(err) {
  console.log(err);
});
```

### Sales Orders

```javascript
// Create a Sales Order
var salesOrder = {
  customerId: 42,
  items: [
    {
      id: 99,
      quantity: 1,
      amount: 1.99 // The total (quantity * item price)
    },
    {
      id: 203,
      quantity: 3,
      amount: 5.97 // The total (quantity * item price)
    }
  ]
};

ns.SalesOrders.create(salesOrder).then(function(result) {
  console.log(result); // The persisted sales order
}, function(err) {
  console.log(err);
});
```

## Test

```
npm test
```
