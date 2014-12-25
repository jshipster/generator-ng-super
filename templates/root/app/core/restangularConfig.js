(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration);


  configuration.$inject = ['RestangularProvider'];

  function configuration(RestangularProvider){

    RestangularProvider.setBaseUrl('/api');

  }

}());
