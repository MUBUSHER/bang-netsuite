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
 * @class Customer
 * @constructor
 * @param {Client} client
 */
module.exports = function(client) {
  /**
   * Get a customer
   *
   * @example
   *     // Find the customer with id 42
   *     var customers = new Customers(client);
   *     customers.find(42).then(function(result) {
   *       console.log(result);
   *     }, function(err) {
   *       console.log(err);
   *     });
   *
   * @method find
   * @param {number} id
   * @return {promise} Resolves to a customer object
   */
  this.find = function(id) {
    return client.get(params({ id: id }));
  };

  /**
   * Create a customer
   *
   * @method create
   * @param {object} customer
   * @returns {promise} Resolves to a customer object
   */
  this.create = function(customer) {
    return client.post(params(), customer);
  };
};

