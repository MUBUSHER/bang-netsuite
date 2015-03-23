/* globals describe,beforeEach,it */
/* jshint expr: true */
'use strict';

var should  = require('should');
var Customer = require('../../lib/models/customer');

describe('Customer', function() {
  describe('new', function () {
    it('requires specific attributes', function () {
      should.throws(function() {
        var customer = new Customer();
      }, /attributes parameter is required/);

      should.throws(function() {
        var customer = new Customer({
          firstname: 'Han'
        });
      }, /"lastname" attribute is required/);

      should.throws(function() {
        var customer = new Customer({
          lastname: 'Solo'
        });
      }, /"firstname" attribute is required/);
    });

    it('sets its attributes', function() {
      var attrs = {
        firstname: 'Han',
        lastname: 'Solo'
      };

      var han = new Customer(attrs);
      han.should.have.property('firstname', attrs.firstname);
      han.should.have.property('lastname', attrs.lastname);
    });
  });
});