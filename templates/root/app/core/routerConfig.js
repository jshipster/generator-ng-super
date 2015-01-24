(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration);

  configuration.$inject = ['$urlRouterProvider'];

  function configuration($urlRouterProvider){

    $urlRouterProvider.otherwise('/welcome');

  }

}());
