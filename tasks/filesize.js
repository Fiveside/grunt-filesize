module.exports = function(grunt) {
  'use strict';

  var fs = require('fs');

  grunt.registerMultiTask('filesize', 'logging file size', function() {

    this.files.forEach(function(file, index) {

      file.src.filter(function(filepath) {
        // Remove files that don't exist.
        if(!grunt.file.exists(filepath)) {
          grunt.log.warn(filepath + ": not found.");
          return false;
        } else {
          return true;
        }

      }).forEach(function(item) {
        // Get the filesize for each item
        var size = fs.statSync(item).size;
        var kb = Math.ceil(size / 1024);
        // Strinify the sizes to make them easier to see.
        size = String(size).green;
        kb = String(kb).green;

        // Print out the filesize
        grunt.log.writeln(item + ': ' + kb + ' kb (' + size + ' bytes)');
      });
    });
  });
};
