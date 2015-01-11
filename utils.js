'use strict';

module.exports = {
  getRootTemplatePath: getRootTemplatePath,
  getComponentsTemplatePath: getComponentsTemplatePath,
  getComponentsTestTemplatePath: getComponentsTestTemplatePath,
  getComponentFilePath: getComponentFilePath,
  getComponentTestFilePath: getComponentTestFilePath,
  getGruntTasksTemplatePath: getGruntTasksTemplatePath,
  setModuleComponentNames: setModuleComponentNames,
  addScriptTagToIndex: addScriptTagToIndex,
  addModuleNameToAppModule: addModuleNameToAppModule
};

var basePath = '../../templates/';
var rootTemplateFolderPath = basePath + 'root/';
var gruntTasksTemplateFolderPath = basePath + 'root/tasks/';
var componentsTemplateFolderPath = basePath + 'components/';
var componentsTestTemplateFolderPath = basePath + 'tests/';

var componentsTestFolderPath = 'tests/';
var appFolderPath = 'app/';


function getRootTemplatePath(fileName){
  return getFilePath(rootTemplateFolderPath, fileName);
}

function getComponentsTemplatePath(fileName){
  return getFilePath(componentsTemplateFolderPath, fileName);
}

function getComponentsTestTemplatePath(fileName){
  return getFilePath(componentsTestTemplateFolderPath, fileName);
}

function getComponentFilePath(module, component, isHTML){
  var componentPath = appFolderPath + module + '/' + component;
  componentPath += isHTML? '.html' : '.js'
  return componentPath;

}

function getComponentTestFilePath(module, component){
  return componentsTestFolderPath + module + '/' + component + '.js';
}

function getGruntTasksTemplatePath(fileName){
  return getFilePath(gruntTasksTemplateFolderPath, fileName);
}

function getFilePath(folderPath, fileName){
  return folderPath + '_' + fileName;
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
  var pathToIndexFile = appFolderPath + 'index.html';
  var indexReplacementTag = '<!-- endbuild -->';
  var indexFile = self.readFileAsString(pathToIndexFile);
  var splitIndexFile = indexFile.split('\n');
  var indexOfReplacementTag = indexOfTag(splitIndexFile, indexReplacementTag);
  var scriptText = [getScriptTag(scriptPath), insertSpaces(indexReplacementTag, countSpaces(splitIndexFile[indexOfReplacementTag])/2)];
  indexFile = indexFile.replace(indexReplacementTag, scriptText.join('\n'));
  self.writeFileFromString(indexFile, pathToIndexFile);
}

function getScriptTag(scriptPath){
  var completePathToScript = scriptPath.replace('app/','');
  return '<script src="' + completePathToScript + '"></script>';
}

function addModuleNameToAppModule(self, moduleName){
  var pathToAppModuleFile = appFolderPath + 'app.module.js';
  var moduleReplacementTag = ']);';
  var moduleFile = self.readFileAsString(pathToAppModuleFile);
  var splitModuleFile = moduleFile.split('\n');
  var indexOfModuleTag = indexOfTag(splitModuleFile, moduleReplacementTag);
  var finalModuleReplacementTag = splitModuleFile[indexOfModuleTag];
  var placeACommaIndex = indexOfModuleTag - 1;
  splitModuleFile[placeACommaIndex] = splitModuleFile[placeACommaIndex] + ',';
  var moduleNameToBeInserted = insertSpaces("'app." + moduleName + "'", countSpaces(splitModuleFile[placeACommaIndex])/2);
  moduleFile = splitModuleFile.join('\n');
  var moduleNameText = [moduleNameToBeInserted, finalModuleReplacementTag];

  moduleFile = moduleFile.replace(moduleReplacementTag,moduleNameText.join('\n'));
  self.writeFileFromString(moduleFile, pathToAppModuleFile);
}

function indexOfTag(fileArr, tag){
  var tagIndex = -1;

  fileArr.forEach(function(value, index){
    if(value.indexOf(tag) !== -1){
      tagIndex = index;
    }
  });

  return tagIndex;
}

function countSpaces(value){
  var spacesCount = 0;
  for(var i = 0, len = value.length; i < len; i++){
    if(value.charAt(i) === ' '){
      spacesCount++;
    }
  }

  return spacesCount;
}

function insertSpaces(value, count){
  for(var i = 0, len  = count; i < len; i++){
    value = ' ' + value;
  }

  return value;
}
