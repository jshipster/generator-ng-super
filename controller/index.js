'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    utils.setModuleComponentNames(this, this.name);
    this.component = this._.capitalize(this.component) + 'Ctrl';
    this.log('You called the ng-super subgenerator with the argument ' + this.name + '.');
  },

  file: function () {
    var templatePath = utils.getComponentsTemplatePath('controller.js');
    var filePath = utils.getComponentFilePath(this.module, this.component);

    this.template.apply(this, [
    	templatePath,
    	filePath
  	]);

    utils.addScriptTagToIndex(this, filePath);
  },

  test: function(){
    var testTemplatePath = utils.getComponentsTestTemplatePath('controller.js');
    var testTestTemplateFilePath = utils.getComponentTestFilePath(this.module, this.component);

    this.template.apply(this, [
      testTemplatePath,
      testTestTemplateFilePath
    ]);
  }
});

module.exports = NgSuperGenerator;
