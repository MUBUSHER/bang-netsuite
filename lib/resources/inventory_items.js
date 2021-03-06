'use strict';

var SCRIPT = 59;
var DEPLOY = 10;

var params = function(params) {
  params = params || {};
  params.script = SCRIPT;
  params.deploy = DEPLOY;
  return params;
};

/**
 * @param {Client} client
 */
module.exports = function(client) {
  /**
   * Get a all Inventory Items (API limited to 1000)
   *
   * @return {promise} Resolves to an array of items
   */
  this.find = function() {
    return client.get(params());
  };
};

