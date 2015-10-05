module.exports = {
  scripts: {
    src: ['.tmp/concat/scripts/*.js'],
    overwrite: true,
    replacements: [{
      from: /src\/[a-zA-Z0-9]*\//g,
      to: 'views/'
    }]
  },
  styles: {
    src: ['dist/styles/main.css'],
    overwrite: true,
    replacements: [{
      from: '../../fonts',
      to: '../fonts'
    },
      {
        from: '../../images',
        to: '../images'
      }]
  }
};
