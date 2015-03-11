var util = require('util');
var rest = require('rest');
var mime = require('rest/interceptor/mime');
var errorCode = require('rest/interceptor/errorCode');
var pathPrefix = require('rest/interceptor/pathPrefix');
var defaultRequest = require('rest/interceptor/defaultRequest');

var BASE_PATH = 'https://rest.na1.netsuite.com/app/site/hosting/restlet.nl';

var authHeader = function(config) {
  var nlAuth = util.format('NLAuth nlauth_account=%s, nlauth_email=%s',
    config.company, config.email, config.password
  );
  return { Authorization: nlAuth };
};

module.exports = function(config) {
  this.rest = rest.wrap(mime)
    .wrap(errorCode)
    .wrap(pathPrefix, { prefix: BASE_PATH})
    .wrap(defaultRequest, { headers: authHeader(config) });

  this.get = function(path, params) {
    return this.rest({
      path: path,
      params: params
    });
  };

  this.post = function(path, params, entity) {
    return this.rest({
      method: 'POST',
      path: path,
      params: params,
      entity: entity
    });
  };
};
