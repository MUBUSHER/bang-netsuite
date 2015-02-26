var RECORD_TYPE = 'inventoryitem';
var CUSTOM_SEARCH_ID = 'customsearch176';

function getFlashItems() {
  // specify the record type and the saved search ID
  return nlapiSearchRecord(RECORD_TYPE, CUSTOM_SEARCH_ID, null, null);
}