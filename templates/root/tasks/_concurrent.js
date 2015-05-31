module.exports = {
  dev:{
    options: {
      logConcurrentOutput: true
    },
    tasks: [
      'compass:app',
      'watch'
    ]
  }
};
