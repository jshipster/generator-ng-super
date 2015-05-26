/**
 * @ngdoc directive
 * @name app.<%= module %>.directive:<%= component %>
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description < description placeholder >
 *
 */

(function(){

  'use strict';

  angular
    .module('app.<%= module %>')
    .directive('<%= component %>', <%= component %>);

  /* @ngInject */
  function <%= component %>(){

    return {
      link: link,
      restrict: 'E',
      template: '<div></div>',
      scope: {
        test: '='
      }
    };

    /////////////////////

    function link(scope, elem, attrs){
      console.info('This is a link function of the directive');
    }
  }

}());
