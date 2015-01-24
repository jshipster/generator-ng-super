var watchTasks = [];

module.exports = {
  options:{
    livereload: true,
    cwd: 'app'
  },
  js: {
    files:[
      '{,*/}/*.js',
      '!bower_components/{,*/}/*.js',
      '!tests/{,*/}/*.js'
    ],
    tasks: watchTasks
  },
  html:{
    files:[
      '{,*/}/*.html',
      '!bower_components/{,*/}/*.html'
    ],
    tasks: watchTasks
  },
  css:{
    files:[
      'styles/css/*.css'
    ],
    tasks: watchTasks
  }
}
