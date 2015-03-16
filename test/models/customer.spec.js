/* globals describe,beforeEach,it */
/* jshint expr: true */
'use strict';

require('should');
var Customer = require('../../lib/models/customer');

describe('Customer', function() {
  describe('new', function () {
    it('requires specific attributes', function () {

      // Should throw assertion errors
      // TODO: Validate error messages
      var c = new Customer();
    });

    it('sets it\'s attributes', function() {
      var attrs = {
        name: 'Han Solo'
      };

      var han = new Customer(attrs);
      han.should.have.property('name', attrs.name);
    });
  });
});