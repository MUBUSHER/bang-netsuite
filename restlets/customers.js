// https://system.na1.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/script/record/customer.html

RECORD_TYPE = 'customer';

var missingParamsError = {
  status: 'failed',
  message: 'missing parameters'
};

/**
 * Creates a new customer.
 *
 * @param {object} datain
 *
 * RESTlet METHOD: POST
 */
function createCustomer(datain) {
  // Check input
  if (!datain.lastname || !datain.firstname) {
    return missingParamsError;
  }

  // Create an empty record
  var record = nlapiCreateRecord(RECORD_TYPE);

  // Set the record's properties
  record.setFieldValue('isperson', 'T'); // Field is a "checkbox" so value must be 'T' or 'F'
  record.setFieldValue('firstname', datain.firstname);
  record.setFieldValue('lastname', datain.lastname);

  // Persist the record
  var recordId = nlapiSubmitRecord(record);

  // Get the record we just saved
  return nlapiLoadRecord(RECORD_TYPE, recordId);
}

/**
 * Retrieves a customer by ID.
 *
 * @param {object} datain
 *
 * RESTlet METHOD: GET
 */
function getCustomer(datain) {
  if (!datain.id) {
    return missingParamsError;
  }
  return nlapiLoadRecord(RECORD_TYPE, datain.id);
}