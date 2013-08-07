var my = require('./othermodule.js');
var d3 = require('d3');
var c = require('test-c');

exports.run = function() {

  return c.run() + my.run() + "[B:v1]";

};
