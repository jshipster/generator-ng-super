
module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var config = {};
  var configLoader = require('./configLoader');
  // Load all of the options from the options folder

  grunt.util._.extend(config, configLoader.load('./tasks/'));
  grunt.initConfig(config);

  grunt.registerTask('server', [
    'concurrent:dev'
  ]);

  grunt.registerTask('test', ['karma:test']);

  grunt.registerTask('build', [
    'clean:dist',
    'html2js',
    'copy:dist',
    'useminPrepare',
    'concat',
    'replace:dist',
    'ngAnnotate:dist',
    'uglify',
    'cssmin',
    'usemin'
  ]);
};
