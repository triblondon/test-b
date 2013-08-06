var c = new require('test-c');
var int = new require('othermodule.js');

exports.run = function() {

  return c.run() + int.run();

};
