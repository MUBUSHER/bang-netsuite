'use strict';

var sinon = require('sinon');
var should = require('should');
var utils = require('./test_utils');
var Client = require('../lib/client');

var client = null;

describe('Client', function() {
  beforeEach(function() {
    client = new Client(utils.testConfig);
  });

  describe('#get', function() {
    it('calls rest with proper args', function() {
      var spy = sinon.spy();
      var args = {
        path: '/products',
        params: { active: true }
      };

      client.rest = spy;
      client.get(args.path, args.params);
      spy.calledOnce.should.be.true;
      spy.calledWith(args).should.be.true;
    });
  });

  describe('#post', function() {
    it('calls rest with proper args', function() {
      var spy = sinon.spy();
      var args = {
        method: 'POST',
        path: '/products',
        params: { cache: false },
        entity: { name: 'lightsaber', color: 'blue' }
      };

      client.rest = spy;
      client.post(args.path, args.params, args.entity);
      spy.calledOnce.should.be.true;
      spy.calledWith(args).should.be.true;
    });
  });

});