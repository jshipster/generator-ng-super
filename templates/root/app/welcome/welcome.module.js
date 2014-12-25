(function(){

  angular.module('app.welcome', [])
    .config(configuration);

  configuration.$inject = ['$stateProvider'];

  function configuration($stateProvider){

    $stateProvider
      .state('Welcome', {
        url:'/welcome',
        templateUrl:'welcome/welcome.html',
        controller: 'WelcomeCtrl as vm'
      })
  }


}());


