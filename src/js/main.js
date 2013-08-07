var c = new require('test-c');
var my = new require('othermodule.js');
var d3 = new require('d3');

exports.run = function() {

  return c.run() + my.run() + "[B:v1]";

};
