/**
 * Created by muhammadumairkhan on 22/11/14.
 */
'use strict';

module.exports = {
  getRootTemplatePath: getRootTemplatePath,
  getComponentsTemplatePath: getComponentsTemplatePath,
  getComponentsTestTemplatePath: getComponentsTestTemplatePath,
  getComponentFilePath: getComponentFilePath,
  getComponentTestFilePath: getComponentTestFilePath,
  getGruntTasksTemplatePath: getGruntTasksTemplatePath,
  setModuleComponentNames: setModuleComponentNames,
  addScriptTagToIndex: addScriptTagToIndex
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

function getComponentFilePath(module, component){
  return appFolderPath + module + '/' + component + '.js';
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
  var scriptText = [getScriptTag(scriptPath), '\t'+indexReplacementTag];
  var indexFile = self.readFileAsString(pathToIndexFile);
  indexFile = indexFile.replace(indexReplacementTag,scriptText.join('\n'));
  self.writeFileFromString(indexFile, pathToIndexFile);
}

function getScriptTag(scriptPath){
  var completePathToScript = scriptPath.replace('app/','');
  return '<script src="' + completePathToScript + '"></script>';
}
