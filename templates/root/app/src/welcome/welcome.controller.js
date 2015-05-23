/**
 * @ngdoc controller
 * @module app.welcome
 * @name Welcome
 * @description Welcome controller which typically is useless and you are going to delete it
 */

(function(){

  'use strict';

  angular.module('app.welcome')
    .controller('Welcome', Welcome);

  /* @ngInject */
  function Welcome(){
    var vm = this;

    vm.welcomeMessage = 'ZE GENGO !';
  }

}());
