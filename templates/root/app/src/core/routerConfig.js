(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration);

  function configuration($urlRouterProvider){

    $urlRouterProvider.otherwise('/welcome');

  }

}());
