var my = require('./othermodule.js');
var c = require('test-c');

exports.run = function() {

  return c.run() + my.run() + "[B:v1]";

};
