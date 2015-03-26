'use strict';

var util = require('util');
var rest = require('rest');
var Q = require('q');
var mime = require('rest/interceptor/mime');
var errorCode = require('rest/interceptor/errorCode');
var pathPrefix = require('rest/interceptor/pathPrefix');
var defaultRequest = require('rest/interceptor/defaultRequest');

var BASE_PATH = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl';

var authHeader = function(config) {
  return util.format(
    'NLAuth nlauth_account=%s, nlauth_email=%s, nlauth_signature=%s',
    config.company, config.email, config.password
  );
};

module.exports = function(config) {
  var headers = {
    Authorization: authHeader(config),
    'Content-Type': 'application/json'
  };

  this.rest = rest.wrap(mime)
    .wrap(errorCode)
    .wrap(pathPrefix, { prefix: BASE_PATH})
    .wrap(defaultRequest, { headers: headers });

  /**
   * Make a GET call to NetSuite and return the body of the response.
   *
   * @param {object} params
   * @returns {Q.promise}
   */
  this.get = function(params) {
    var deferred = Q.defer();

    this.rest({params: params}).then(function(response) {
      deferred.resolve(response.entity);
    }, function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };

  /**
   * Make a POST call to NetSuite and return the body of the response.
   *
   * @param {object} params
   * @param {object} entity
   * @returns {Q.promise}
   */
  this.post = function(params, entity) {
    var deferred = Q.defer();
    var args = { method: 'POST', params: params, entity: entity };

    this.rest(args).then(function(response) {
      deferred.resolve(response.entity);
    }, function(err) {
      deferred.reject(err);
    });

    return deferred.promise;
  };
};
