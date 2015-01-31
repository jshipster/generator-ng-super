module.exports = {
  dist: {
    src: ['.tmp/concat/scripts/app.js'],
    overwrite: true,
    replacements: [{
      from: /src\/[a-zA-Z0-9]*\//g,
      to: 'views/'
    },{
      from: "angular.module('app', [",
      to: "angular.module('app', ['templates-htmlmin',"
    }]
  }
}
