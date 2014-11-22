
var watchOptions =  {
  cwd: {
    files: 'app',
    livereload: true
  }
};

var watchTasks = [];

module.exports = {
  js: {
    files: [
      '**/*.js'
    ],
    tasks: watchTasks,
    options: watchOptions
  },
  html: {
    files: [
      '**/*.html'
    ],
    tasks: watchTasks,
    options: watchOptions
  }
}
