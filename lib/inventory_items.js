SCRIPT = 59;
DEPLOY = 1;

var params = function(params) {
  params = params || {};
  params.script = SCRIPT;
  params.deploy = DEPLOY;
  return params;
};

module.exports = function(client) {
  this.find = function(id) {
    return client.get('', params({id: id}))
  };

  this.create = function(item) {
    return client.post('', params(), item)
  }
};

