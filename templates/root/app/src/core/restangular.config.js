/**
 * @ngdoc config
 * @module app.core
 * @name app.core
 * @description core Restangular configurations
 */

(function(){

  'use strict';

  angular.module('app.core')
    .config(configuration);

  /* @ngInject */
  function configuration(RestangularProvider){

    RestangularProvider.setBaseUrl('/api');

  }

}());
