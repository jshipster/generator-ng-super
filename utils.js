'use strict';

var paths       = require('./paths');
var _           = require('lodash');

module.exports = {
  getRootTemplatePath: getRootTemplatePath,
  getAppTemplatePath: getAppTemplatePath,
  getComponentsTemplatePath: getComponentsTemplatePath,
  getComponentsTestTemplatePath: getComponentsTestTemplatePath,
  getComponentFilePath: getComponentFilePath,
  getComponentTestFilePath: getComponentTestFilePath,
  getGruntTasksTemplatePath: getGruntTasksTemplatePath,
  setModuleComponentNames: setModuleComponentNames,
  addScriptTagToIndex: addScriptTagToIndex,
  addModuleNameToAppModule: addModuleNameToAppModule,
  doesModuleExist: doesModuleExist
};

var filePaths = {
  index: paths.destination.app + 'index.html',
  appModule: paths.destination.src + 'app.module.js'
}

var replacementTags = {
  index:{
    appModule: '<script src="src/app.module.js"></script>',
    endbuild: '<!-- endbuild -->'
  },
  appModule:{
    endingBrackets: ']);'
  }
}

function getFilePath(folderPath, fileName){
  return folderPath + '_' + fileName;
}

function getAppTemplatePath(fileName){
  return getFilePath(paths.template.app, fileName);
}

function getRootTemplatePath(fileName){
  return getFilePath(paths.template.root, fileName);
}

function getComponentsTemplatePath(fileName){
  return getFilePath(paths.template.components, fileName);
}

function getComponentsTestTemplatePath(fileName){
  return getFilePath(paths.template.componentTests, fileName);
}

function getGruntTasksTemplatePath(fileName){
  return getFilePath(paths.template.gruntTasks, fileName);
}

function getComponentFilePath(module, component, isHTML){
  var componentPath = paths.destination.src + module + '/' + component;
  componentPath += isHTML? '.html' : '.js';
  return componentPath;

}

function getComponentTestFilePath(module, component){
  return paths.destination.tests + module + '/' + component + '.js';
}

function setModuleComponentNames(retValObject, dottedName){
  var names = dottedName.split('.');

  if(names.length < 2){
    throw 'Component must specify a module';
  }

  retValObject.module = names[0];
  retValObject.component = names[1];
}

function addScriptTagToIndex(self, scriptPath){
  var pathToIndexFile = filePaths.index;
  var indexReplacementTag = _.contains(scriptPath, 'module')? replacementTags.index.appModule : replacementTags.index.endbuild;
  var indexFile = self.readFileAsString(pathToIndexFile);
  var splitIndexFile = indexFile.split('\n');
  var indexOfReplacementTag = indexOfTag(splitIndexFile, indexReplacementTag);
  var replacingScriptTag = insertSpaces(getScriptTag(scriptPath), countSpaces(splitIndexFile[indexOfReplacementTag - 1]));
  splitIndexFile.splice(indexOfReplacementTag, 0, replacingScriptTag);
  indexFile = splitIndexFile.join('\n');
  self.writeFileFromString(indexFile, pathToIndexFile);
}

function getScriptTag(scriptPath){
  var completePathToScript = scriptPath.replace(paths.destination.src,'');
  return '<script src="src/' + completePathToScript + '"></script>';
}

function addModuleNameToAppModule(self, moduleName){
  var pathToAppModuleFile = paths.destination.src + 'app.module.js';
  var moduleReplacementTag = ']);';
  var moduleFile = self.readFileAsString(pathToAppModuleFile);
  var splitModuleFile = moduleFile.split('\n');
  var indexOfModuleTag = indexOfTag(splitModuleFile, moduleReplacementTag);
  var placeACommaIndex = indexOfModuleTag - 1;
  var moduleNameToBeInserted = insertSpaces("'app." + moduleName + "'", countSpaces(splitModuleFile[placeACommaIndex]));
  splitModuleFile[placeACommaIndex] = splitModuleFile[placeACommaIndex] + ',';
  splitModuleFile.splice(indexOfModuleTag, 0, moduleNameToBeInserted);
  moduleFile = splitModuleFile.join('\n');
  self.writeFileFromString(moduleFile, pathToAppModuleFile);
}

function indexOfTag(fileArr, tag){

  var tagIndex = _.findLastIndex(fileArr, function(value) {
    return _.contains(value, tag) ;
  });

  return tagIndex;
}

function countSpaces(valueArr){
  var spacesCount = 0;
  _.forEach(valueArr, function(char){
    if(char === ' ')
      spacesCount++;
    else
      return false; //break on first char
  });

  return spacesCount;
}

function insertSpaces(value, count){
  for(var i = 0, len  = count; i < len; i++){
    value = ' ' + value;
  }

  return value;
}

function doesModuleExist(self, moduleName){
  var pathToModuleFile = paths.destination.src + moduleName +'/' +moduleName+ '.module.js';
  var shouldCreateModuleFile = true;
  try{
    var moduleFile = self.readFileAsString(pathToModuleFile);
    if(moduleFile.length > 0){
      shouldCreateModuleFile = false;
    }
  }
  catch(e){
    console.log(moduleName + ' module not found');
  }
  return shouldCreateModuleFile;
}
