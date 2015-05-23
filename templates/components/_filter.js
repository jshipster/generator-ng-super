/**
 * @ngdoc filter
 * @module app.<%= module %>
 * @name <%= component %>
 * @description < description placeholder >
 * @returns {function} < returns placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.<%= module %>')
    .filter('<%= component %>', <%= component %>);

  /* @ngInject */
  function <%= component %>(){
    return function (input){
      return '<%= component %> filter: ' + input;
    };
  }

}());
