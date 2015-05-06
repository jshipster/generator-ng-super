'use strict';
var utils = require('../utils');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var NgSuperGenerator = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
        this.option('skipInstall');
    },

    prompting: function() {
        var done = this.async();
        var prompts = [];

        this.appname = arguments[0];
        this.ngVer = "1.3.15";

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the NgSuper generator!'
        ));

        if(!this.appname){
          prompts.push({
            type: 'input',
            name: 'appName',
            message: 'What would you like to name this app?',
            default: 'App'
          });

          this.prompt(prompts, function(props) {
            this.appname = props.appName;
            done();
          }.bind(this));
        }
        else{
          done();
        }


    },

    writing: {
        app: function() {
            this.template.apply(this, [utils.getRootTemplatePath('package.json'), 'package.json']);
            this.template.apply(this, [utils.getRootTemplatePath('bower.json'), 'bower.json']);
            this.template.apply(this, [utils.getRootTemplatePath('index.html'),'app/index.html']);
            this.src.copy(utils.getRootTemplatePath('.gitignore'),'.gitignore');
            this.src.copy(utils.getRootTemplatePath('.bowerrc'),'.bowerrc');

        },

        projectfiles: function() {
            this.src.copy(utils.getRootTemplatePath('.editorconfig'), '.editorconfig');
            this.src.copy(utils.getRootTemplatePath('.jshintrc'), '.jshintrc');
            this.src.copy(utils.getRootTemplatePath('.jscsrc'), '.jscsrc');
            this.directory('../../templates/root/app', 'app/');
            this.directory('../../templates/root/tests', './tests');
        },

        gruntFiles: function(){
          this.src.copy(utils.getRootTemplatePath('configLoader.js'),'configLoader.js');
          this.src.copy(utils.getRootTemplatePath('gruntfile.js'), 'gruntfile.js');
          this.src.copy(utils.getGruntTasksTemplatePath('connect.js'),'tasks/connect.js');
          this.src.copy(utils.getGruntTasksTemplatePath('watch.js'),'tasks/watch.js');
          this.src.copy(utils.getGruntTasksTemplatePath('concurrent.js'),'tasks/concurrent.js');
          this.src.copy(utils.getGruntTasksTemplatePath('compass.js'),'tasks/compass.js');
          this.src.copy(utils.getGruntTasksTemplatePath('karma.js'),'tasks/karma.js');
          this.src.copy(utils.getGruntTasksTemplatePath('clean.js'),'tasks/clean.js');
          this.src.copy(utils.getGruntTasksTemplatePath('copy.js'),'tasks/copy.js');
          this.src.copy(utils.getGruntTasksTemplatePath('ngAnnotate.js'),'tasks/ngAnnotate.js');
          this.src.copy(utils.getGruntTasksTemplatePath('replace.js'),'tasks/replace.js');
          this.src.copy(utils.getGruntTasksTemplatePath('usemin.js'),'tasks/usemin.js');
          this.src.copy(utils.getGruntTasksTemplatePath('useminPrepare.js'),'tasks/useminPrepare.js');
          this.src.copy(utils.getGruntTasksTemplatePath('wiredep.js'),'tasks/wiredep.js');
          this.src.copy(utils.getGruntTasksTemplatePath('bump.js'),'tasks/bump.js');
          this.src.copy(utils.getGruntTasksTemplatePath('html2js.js'),'tasks/html2js.js');
        }
    },

    end: function() {
      if(!this.options.skipInstall)
        this.installDependencies();
      else
        console.log('Skipping installation: please run "npm install" and "bower install" to complete installation of dependencies');
    }
});

module.exports = NgSuperGenerator;
