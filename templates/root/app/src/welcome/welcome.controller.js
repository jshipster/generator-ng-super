(function(){

  'use strict';

  angular.module('app.welcome')
    .controller('WelcomeCtrl', WelcomeCtrl);

  /* @ngInject */
  function WelcomeCtrl() {
    var vm = this;

    vm.welcomeMessage = 'ZE GENGO !';
  }

}());
