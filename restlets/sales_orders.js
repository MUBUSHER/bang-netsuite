/* globals nlapiCreateRecord,nlapiSubmitRecord,nlapiLoadRecord */
'use strict';

// https://system.na1.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/script/record/salesorder.html

var RECORD_TYPE = 'salesorder';

/**
 * Creates a new sales order with the given Inventory Items.
 *
 * @param {object} datain
 *
 * RESTlet METHOD: POST
 */
function createSalesOrder(datain) {
  // Create an empty record
  var record = nlapiCreateRecord(RECORD_TYPE);

  // Set the record's properties
  record.setFieldValue('entity', datain.customerId);

  datain.items.forEach(function(item) {
    record.selectNewLineItem('item');
    record.setCurrentLineItemValue('item','item', item.id);
    record.setCurrentLineItemValue('item', 'quantity', item.quantity);
    record.setCurrentLineItemValue('item', 'amount', item.amount); // The total (quantity * item price)
    record.commitLineItem('item');
  });

  // Persist the record
  var recordId = nlapiSubmitRecord(record);

  // Get the record we just saved
  return nlapiLoadRecord(RECORD_TYPE, recordId);
}