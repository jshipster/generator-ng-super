/**
 * @ngdoc controller
 * @name app.welcome.controller:Welcome
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
    vm.testFunction = testFunction;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.welcome.controller:Welcome
     * @description
     * My Description rules
     */

    function testFunction(num){
      console.info('This is a test function number ' + num);
    }
  }

}());
