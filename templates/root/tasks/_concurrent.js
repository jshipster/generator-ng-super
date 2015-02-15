module.exports={
  dev:{
    options: {
      logConcurrentOutput: true
    },
    tasks: ['watch', 'connect:server', 'compass:app']
  }
}
