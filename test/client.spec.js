'use strict';

var should = require('should');
var utils = require('./test_utils');
var Client = require('../lib/client');

var client = new Client(utils.testConfig);

describe('Client', function() {
  describe('#get', function() {
    it('is awesome', function() {
      client.get();

      var fuzz = true;
      fuzz.should.eql(true);
    });
  });
});