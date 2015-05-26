/**
 * @ngdoc overview
 * @name app.<%= module %>
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.<%= module %>', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){

    //add your state mappings here
    //$stateProvider
    //  .state('Welcome', {
    //    url:'/welcome',
    //    templateUrl:'src/welcome/welcome.html',
    //    controller: 'WelcomeCtrl as vm'
    //  }
    //);
  }

}());
