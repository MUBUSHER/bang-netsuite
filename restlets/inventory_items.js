/* globals nlobjSearchFilter,nlobjSearchColumn,nlapiSearchRecord */
'use strict';

// https://system.na1.netsuite.com/help/helpcenter/en_US/Output/Help/SuiteCloudCustomizationScriptingWebServices/SuiteScript/SearchAPIs.html

var RECORD_TYPE = 'inventoryitem';

// Custom "checkbox" field "flash" on Inventory Items
// that designates if the item is available for flash sales.
var FLASH_FIELD = 'custitem_flash';

/**
 * Retrieves all Inventory Items marked for flash.
 *
 * Internal function nlapiSearchRecord() limits results to
 * 1000 items and truncates long text fields to 4000 characters.
 *
 * RESTlet METHOD: GET
 */
function getInventoryItems() {
  // Define search filters
  var filters = [
    new nlobjSearchFilter(FLASH_FIELD, null, 'is', 'T')
  ];

  // Define search columns
  var columns = [
    new nlobjSearchColumn('itemid'),
    new nlobjSearchColumn('displayname'),
    new nlobjSearchColumn('manufacturer'),
    new nlobjSearchColumn('mpn'),
    new nlobjSearchColumn('countryofmanufacture'),
    new nlobjSearchColumn('salesdescription')
  ];

  return nlapiSearchRecord(RECORD_TYPE, null, filters, columns );
}
