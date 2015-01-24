'use strict';
var utils = require('../utils');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var NgSuperGenerator = yeoman.generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
    },

    prompting: function() {
        var done = this.async();
        var prompts = [];
        var appName = arguments[0];

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the NgSuper generator!'
        ));

        if(!appName){
          prompts.push({
            type: 'input',
            name: 'appName',
            message: 'What would you like to name this app?',
            default: this.appname
          })
        }
        else{
          this.appname = this.name;
        }

        this.prompt(prompts, function(props) {
            this.appname = props.appName;
            this.ngVer = "1.3.0";
            done();
        }.bind(this));
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
            this.src.copy(utils.getRootTemplatePath('editorconfig'), '.editorconfig');
            this.src.copy(utils.getRootTemplatePath('jshintrc'), '.jshintrc');
            this.directory('../../templates/root/app', 'app/');
        },

        gruntFiles: function(){
          this.src.copy(utils.getRootTemplatePath('configLoader.js'),'configLoader.js');
          this.src.copy(utils.getRootTemplatePath('gruntfile.js'), 'gruntfile.js');
          this.src.copy(utils.getGruntTasksTemplatePath('connect.js'),'tasks/connect.js');
          this.src.copy(utils.getGruntTasksTemplatePath('watch.js'),'tasks/watch.js');
          this.src.copy(utils.getGruntTasksTemplatePath('concurrent.js'),'tasks/concurrent.js');
        }
    },

    end: function() {
        this.installDependencies();
    }
});

module.exports = NgSuperGenerator;
