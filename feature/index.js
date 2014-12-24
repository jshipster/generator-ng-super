'use strict';
var utils = require('../utils');
var yeoman = require('yeoman-generator');


var NgSuperGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the ng-super subgenerator with the argument ' + this.name + '.');
    this.module = this.name;
  },

  module: function () {
    this.template.apply(this, [
    	utils.getComponentsTemplatePath('featureModule.js'),
    	utils.getComponentFilePath(this.module, this.module + '.module')
  	]);
  }
});

module.exports = NgSuperGenerator;
