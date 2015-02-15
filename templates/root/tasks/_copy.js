module.exports = {
  dist: {
    files:[
      {
        src: 'app/index.html',
        dest: 'dist/index.html'
      },
      {
        cwd: 'app/fonts',
        src: '**',
        dest: 'dist/fonts/',
        expand: true
      },
      {
        cwd: 'app/images',
        src: '**/*.*',
        dest: 'dist/images/',
        expand: true
      }
    ]
  }
}
