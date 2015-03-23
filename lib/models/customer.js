'use strict';

var assert = require('assert');

module.exports = function(attrs) {
  assert(attrs, 'The attributes parameter is required');
  assert(attrs.firstname, 'The "firstname" attribute is required');
  assert(attrs.lastname, 'The "lastname" attribute is required');

  this.firstname = attrs.firstname;
  this.lastname = attrs.lastname;
};