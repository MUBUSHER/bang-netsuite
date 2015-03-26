'use strict';

var SCRIPT = 60;
var DEPLOY = 19;

var params = function(params) {
  params = params || {};
  params.script = SCRIPT;
  params.deploy = DEPLOY;
  return params;
};

module.exports = function(client) {
  /**
   * Get a Customer
   *
   * @returns promise
   */
  this.find = function(id) {
    return client.get(params({ id: id }));
  };

  /**
   * Create a customer
   *
   * @param {object} customer
   *
   * @returns promise
   */
  this.create = function(customer) {
    return client.post(params(), customer);
  };
};

