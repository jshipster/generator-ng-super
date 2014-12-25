'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    utils.setModuleComponentNames(this, this.name);
    this.log('You called the ng-super subgenerator with the argument ' + this.name + '.');
  },

  file: function () {
    var templatePath = utils.getComponentsTemplatePath('directive.js');
    var filePath = utils.getComponentFilePath(this.module, this.component);
    this.template.apply(this, [
      templatePath,
      filePath,
    ]);

    utils.addScriptTagToIndex(this, filePath)
  }
});

module.exports = NgSuperGenerator;
