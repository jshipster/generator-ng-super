module.exports = {
  dist: {
    src: ['.tmp/concat/scripts/app.js'],
    overwrite: true,
    replacements: [{
      from: /src\/[a-zA-Z0-9]*\//g,
      to: 'views/'
    }]
  }
}
