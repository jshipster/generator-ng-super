'use strict';

var templateBasePath = '../../templates/',
    templateRootFolder = templateBasePath + 'root/',
    templateAppFolder = templateRootFolder + 'app/',
    templateGruntTasksFolder = templateRootFolder + '/tasks/',
    templateComponentsFolder = templateBasePath + 'components/',
    templateComponentsTestsFolder = templateBasePath + 'tests/';

var destinationBasePath = '',
    destinationAppFolder = destinationBasePath + 'app/',
    destinationSrcFolder = destinationAppFolder + 'src/',
    destinationTestsFolder = destinationBasePath + 'tests/';

var templatePaths = {
  base: templateBasePath,
  app: templateAppFolder,
  root: templateRootFolder,
  gruntTasks: templateGruntTasksFolder,
  components: templateComponentsFolder,
  componentTests: templateComponentsTestsFolder
};

var destinationPaths = {
  base: destinationBasePath,
  app: destinationAppFolder,
  src: destinationSrcFolder,
  tests: destinationTestsFolder
};

module.exports = {
  template: templatePaths,
  destination: destinationPaths
};
