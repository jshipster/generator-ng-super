(function(){

  'use strict';

  angular.module('app.welcome')
    .controller('WelcomeCtrl', WelcomeCtrl);

  WelcomeCtrl.$inject = [];

  function WelcomeCtrl() {
    var vm = this;

    vm.welcomeMessage = 'ZE GENGO !';
  }

}());
