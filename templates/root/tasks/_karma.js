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
    files: [
      {
        src: [
          'app/{,*/}/*.module.js',
          'app/{,*/,!bower_components}/*.js',
          'tests/{,*/}/*.js'
        ]
      }
    ],
    runnerPort: 9876,
    browsers: ['PhantomJS'],
    logLevel: 'ERROR'
  }
}
