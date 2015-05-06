(function(){

  angular.module('app.welcome', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    $stateProvider
      .state('Welcome', {
        url:'/welcome',
        templateUrl:'src/welcome/welcome.html',
        controller: 'Welcome as vm',
        title: 'ng-Super Welcome'
      });
  }

}());
