/**
 * Created by muhammadumairkhan on 22/11/14.
 */
'use strict';

module.exports = {
  getRootTemplatePath: getRootTemplatePath,
  getComponentsTemplatePath: getComponentsTemplatePath,
  getGruntTasksTemplatePath: getGruntTasksTemplatePath
}
var basePath = '../../templates/';
var rootTemplateFolderPath = basePath + 'root/';
var gruntTasksTemplateFolderPath = basePath + 'root/tasks/';
var componentsTemplateFolderPath = basePath + 'components/';

function getRootTemplatePath(fileName){
  return getFilePath(rootTemplateFolderPath, fileName);
}

function getComponentsTemplatePath(fileName){
  return getFilePath(componentsTemplateFolderPath, fileName);
}

function getGruntTasksTemplatePath(fileName){
  return getFilePath(gruntTasksTemplateFolderPath, fileName);
}

function getFilePath(folderPath, fileName){
  return folderPath + '_' + fileName;
}
