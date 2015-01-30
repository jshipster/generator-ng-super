(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration);

  function configuration(RestangularProvider){

    RestangularProvider.setBaseUrl('/api');

  }

}());
