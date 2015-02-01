(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration);

  /* @ngInject */
  function configuration($urlRouterProvider){

    $urlRouterProvider.otherwise('/welcome');

  }

}());
