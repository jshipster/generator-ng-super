'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    utils.setModuleComponentNames(this, this.name);
    this.log('You called the ng-super subgenerator with the argument ' + this.name + '.');
  },

  file: function () {
    this.template.apply(this, [
      utils.getComponentsTemplatePath('factory.js'),
      utils.getComponentFilePath(this.module, this.component)
    ]);
  },

  test: function(){
    this.template.apply(this, [
      utils.getComponentsTestTemplatePath('factory.js'),
      utils.getComponentTestFilePath(this.module, this.component)
    ]);
  }
});

module.exports = NgSuperGenerator;
