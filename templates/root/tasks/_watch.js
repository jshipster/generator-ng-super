var watchTasks = [];

module.exports = {
  options:{
    livereload: true,
    cwd: 'app'
  },
  js: {
    files:[
      'src/{,*/}/*.js'
    ],
    tasks: watchTasks
  },
  html:{
    files:[
      '*.html',
      'src/{,*/}/*.html',
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
