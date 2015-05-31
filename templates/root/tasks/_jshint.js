module.exports = {
  options:{
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  app:{
    src: [
      'app/src/**/*.js'
    ]
  },
  test: {
    src:[
      'tests/**/*.js'
    ]
  }
};
