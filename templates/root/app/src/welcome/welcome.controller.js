(function(){

  'use strict';

  angular.module('app.welcome')
    .controller('Welcome', Welcome);

  /* @ngInject */
  function Welcome() {
    var vm = this;

    vm.welcomeMessage = 'ZE GENGO !';
  }

}());
