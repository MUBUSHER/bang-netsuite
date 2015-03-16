'use strict';

var assert = require('assert');

module.exports = function(attrs) {
  assert(attrs, 'The attributes parameter is required');
  assert(attrs.name, 'The "name" attribute is required');

  this.name = attrs.name;
};