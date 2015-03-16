/* globals describe,beforeEach,it */
/* jshint expr: true */
'use strict';

require('should');
var sinon = require('sinon');
var utils = require('./test_utils');
var Client = require('../lib/client');


var client = null;

describe('Client', function() {
  beforeEach(function() {
    client = new Client(utils.testConfig);
  });

  describe('#get', function() {
    it('calls rest with params', function() {
      var spy = sinon.spy();
      var args = {
        params: { active: true }
      };

      client.rest = spy;
      client.get(args.params);
      spy.calledOnce.should.be.true;
      spy.calledWith(args).should.be.true;
    });
  });

  describe('#post', function() {
    it('calls rest with proper args', function() {
      var spy = sinon.spy();
      var args = {
        method: 'POST',
        params: { cache: false },
        entity: { name: 'lightsaber', color: 'blue' }
      };

      client.rest = spy;
      client.post(args.params, args.entity);
      spy.calledOnce.should.be.true;
      spy.calledWith(args).should.be.true;
    });
  });

});