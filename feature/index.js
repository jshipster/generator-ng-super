'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('Feature Sub-Generator invoked');
    this.module = this.name;
  },

  module: function () {
    var templatePath = utils.getComponentsTemplatePath('featureModule.js');
    var filePath = utils.getComponentFilePath(this.module, this.module + '.module');

    this.template.apply(this, [
    	templatePath,
    	filePath
  	]);
    utils.addScriptTagToIndex(this, filePath);
    utils.addModuleNameToAppModule(this, this.module);
  }
});

module.exports = NgSuperGenerator;
