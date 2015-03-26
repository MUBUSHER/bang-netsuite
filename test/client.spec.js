/* globals describe,beforeEach,it */
/* jshint expr: true */
'use strict';

require('should');
var Q = require('Q');
var sinon = require('sinon');
var utils = require('./test_utils');
var Client = require('../lib/client');


var client = null;

describe('Client', function() {
  beforeEach(function() {
    client = new Client(utils.testConfig);
  });

  describe('#get', function() {
    it('calls the REST client and resolves the response body', function() {
      var args = {
        params: { active: true }
      };
      var user = { fname: 'Han', lname: 'Solo' };
      var stub = sinon.stub();
      stub.withArgs(args).returns(Q(user));
      client.rest = stub;

      client.get(args.params).then(function(entity) {
        entity.should.eql(user);
      });
    });
  });

  describe('#post', function() {
    it('calls the REST client and resolves the response body', function() {
      var args = {
        method: 'POST',
        params: { cache: false },
        entity: { name: 'lightsaber', color: 'blue' }
      };
      var stub = sinon.stub();
      stub.withArgs(args).returns(Q(args.entity));

      client.post((args.params)).then(function(entity) {
        entity.should.eql(args.entity);
      });
    });
  });

});