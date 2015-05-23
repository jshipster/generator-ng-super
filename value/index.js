'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    utils.setModuleComponentNames(this, this.name);
    this.filename = this.component + '.value';
    this.log('Value Sub-Generator invoked');
  },
  module: function(){
    if(utils.doesModuleExist(this, this.module)){
      this.composeWith('ng-super:feature', {
        args:[this.module]
      });
    };
  },
  file: function () {
    var templatePath = utils.getComponentsTemplatePath('value.js');
    var filePath = utils.getComponentFilePath(this.module, this.filename);
    this.template.apply(this, [
      templatePath,
      filePath
    ]);

    utils.addScriptTagToIndex(this, filePath);
  }
});

module.exports = NgSuperGenerator;
