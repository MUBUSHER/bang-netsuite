'use strict';

var SCRIPT = 59;
var DEPLOY = 10;

var params = function(params) {
  params = params || {};
  params.script = SCRIPT;
  params.deploy = DEPLOY;
  return params;
};

module.exports = function(client) {
  /**
   * Get all Inventory Items, max 1000
   *
   * @returns promise
   */
  this.find = function() {
    return client.get(params());
  };
};

