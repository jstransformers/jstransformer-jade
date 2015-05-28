'use strict';

var jade = require('jade');
var fs   = require('fs');

exports.name = 'jade';
exports.outputFormat = 'html';

exports.compile = jade.compile;
exports.compileClient = jade.compileClientWithDependenciesTracked;
exports.compileFile = jade.compileFile;
exports.compileFileClient = function (path, options) {
  // There is no compileFileClientWithDependenciesTracked so gotta do it
  // manually.
  options = options || {};
  options.filename = options.filename || path;
  return exports.compileClient(fs.readFileSync(path, 'utf8'), options);
};
