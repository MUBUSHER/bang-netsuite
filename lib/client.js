'use strict';

var util = require('util');
var rest = require('rest');
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

  this.get = function(params) {
    return this.rest({
      params: params
    });
  };

  this.post = function(params, entity) {
    return this.rest({
      method: 'POST',
      params: params,
      entity: entity
    });
  };
};
