'use strict';

var SCRIPT = 60;
var DEPLOY = 19;

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
   * Get a customer
   *
   * @param {number} id
   * @return {promise} Resolves to a customer object
   */
  this.find = function(id) {
    return client.get(params({ id: id }));
  };

  /**
   * Create a customer
   *
   * @param {object} customer
   * @returns {promise} Resolves to a customer object
   */
  this.create = function(customer) {
    return client.post(params(), customer);
  };
};

