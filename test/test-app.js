/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('app generator', function () {

  describe('file generation', function(){
    before(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .inDir(path.join(os.tmpdir(), './temp-test'))
        .withOptions({ 'skipInstall': true })
        .on('end', done);
    });

    it('create root files', function () {
      assert.file([
        'bower.json',
        'configLoader.js',
        'gruntfile.js',
        'package.json',
        '.editorconfig',
        '.jshintrc',
        '.bowerrc',
        '.gitignore'
      ]);
    });

    it('create grunt tasks', function(){
      assert.file([
        'tasks/connect.js',
        'tasks/watch.js',
        'tasks/concurrent.js',
        'tasks/compass.js',
        'tasks/karma.js',
        'tasks/clean.js',
        'tasks/copy.js',
        'tasks/ngAnnotate.js',
        'tasks/replace.js',
        'tasks/usemin.js',
        'tasks/useminPrepare.js',
        'tasks/wiredep.js',
        'tasks/bump.js'
      ]);
    });

    it('create tests', function(){
      assert.file([
        'tests/welcome/WelcomeCtrl.js'
      ]);
    });

    it('create application', function(){
      assert.file([
        'app/src/app.module.js',
        'app/src/common/common.module.js',
        'app/src/core/core.module.js',
        'app/src/core/restangularConfig.js',
        'app/src/core/routerConfig.js',
        'app/src/welcome/WelcomeCtrl.js',
        'app/src/welcome/welcome.html',
        'app/src/welcome/welcome.module.js',
        'app/styles/css/main.css',
        'app/styles/main.scss',
        'app/styles/partials/_skin.scss',
        'app/styles/partials/_welcome.scss'
      ]);
    });
  });

  describe('app name', function(){

    describe('default name', function(){
      before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withOptions({ 'skipInstall': true })
          .withPrompt({
            someOption: true
          })
          .on('end', done);
      });

      it('set default app name', function(){
        assert.fileContent('bower.json',/"name": "App"/);
      });
    });

    describe('name as parameter', function(){
      before(function (done) {
        helpers.run(path.join(__dirname, '../app'))
          .inDir(path.join(os.tmpdir(), './temp-test'))
          .withOptions({ 'skipInstall': true })
          .withArguments(['foo'])
          .withPrompt({
            someOption: true
          })
          .on('end', done);
      });

      it('set default app name', function(){
        assert.fileContent('bower.json',/"name": "foo"/);
      });
    });

  });

});


