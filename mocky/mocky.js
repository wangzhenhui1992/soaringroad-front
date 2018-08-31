var mocky = require('mocky');
var dir = require('require-dir');
var mocks = dir('./api', { recurse: true });

var apis = [];
Object.keys(mocks).forEach(
  key => {
    if (Array.isArray(mocks[key])) {
      apis = apis.concat(mocks[key]);
    } else {
      apis.push(mocks[key]);
    }
  }
);
mocky.createServer(apis).listen(4321);
