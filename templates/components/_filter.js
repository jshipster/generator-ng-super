/**
 * @ngdoc filter
 * @name app.<%= module %>.filer:<%= component %>
 * @description < description placeholder >
 * @param {object} input object to be filtered
 * @returns {object} < returns placeholder >
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
