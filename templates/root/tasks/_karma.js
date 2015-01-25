module.exports = {
  options: {
    frameworks: ['jasmine'],
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/lodash/dist/lodash.js',
      'app/bower_components/restangular/dist/restangular.js',
    ]
  },
  test: {
    autoWatch: true,
    files: [
      {
        src: [
          'app/src/{,*/}/*.module.js', //all modules
          'app/src/{,*/}/*.js', //all files
          'tests/{,*/}/*.js' //all tests
        ]
      }
    ],
    runnerPort: 9876,
    browsers: ['PhantomJS'],
    logLevel: 'ERROR'
  }
}
