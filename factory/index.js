'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    utils.setModuleComponentNames(this, this.name);
    this.log('Factory Sub-Generator invoked');
  },
  module: function(){
    if(utils.doesModuleExist(this, this.module)){
      this.composeWith('ng-super:feature', {
        args:[this.module]
      });
    };
  },
  file: function () {
    var templatePath = utils.getComponentsTemplatePath('factory.js');
    var filePath = utils.getComponentFilePath(this.module, this.component);
    this.template.apply(this, [
      templatePath,
      filePath
    ]);

    utils.addScriptTagToIndex(this, filePath);
  },

  test: function(){
    this.template.apply(this, [
      utils.getComponentsTestTemplatePath('factory.js'),
      utils.getComponentTestFilePath(this.module, this.component)
    ]);
  }
});

module.exports = NgSuperGenerator;
