module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    filesize: {
      test: {
        options: {
          foo: true
        },
        src: [
          'tasks/filesize.js',
          'gruntfile.js',
          'README.md'
        ]
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['filesize:test']);
};
