module.exports = {
    dist: {
      files:[
        {
          src: 'app/index.html',
          dest: 'dist/index.html'
        },
        {
          expand: true,
          src: 'app/src/{,*/}/*.html',
          dest: 'dist/views/',
          flatten: true
        }
      ]
    }
}
