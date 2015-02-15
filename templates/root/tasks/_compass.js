module.exports = {
  options: {
    sassDir: 'app/styles',
    cssDir: 'app/styles/css',
    fontsDir: 'app/fonts',
    imagesDir: 'app/images',
    httpFontsPath: '../../fonts',
    httpImagesPath: '../../images',
  },
  app: {
    options:{
      watch: true
    }
  },
  dist: {
    watch: false
  }
}
