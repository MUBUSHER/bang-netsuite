'use strict';

var SCRIPT = 61;
var DEPLOY = 7;

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
   * Create a Sales Order
   *
   * @param {object} salesOrder
   * @returns {promise} Resolves to a sales order object
   */
  this.create = function(salesOrder) {
    return client.post(params(), salesOrder);
  };
};

