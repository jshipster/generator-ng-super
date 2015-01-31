module.exports = {
  options: {
      singleQuotes: true,
  },
  dist: {
      files: {
          '.tmp/concat/scripts/app.js': ['.tmp/concat/scripts/app.js', '.tmp/concat/scripts/templates.js']
      }
  }
}
