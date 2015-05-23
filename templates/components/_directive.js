/**
 * @ngdoc directive
 * @module app.<%= module %>
 * @name <%= component %>
 * @restrict E
 * @scope true
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.<%= module %>')
    .directive('<%= component %>', <%= component %>);

  /* @ngInject */
  function <%= component %>(){

    var directive = {
      link: link,
      restrict: 'E',
      template: '<div></div>',
      scope: {

      }
    };

    return directive;

    /////////////////////

    function link(scope, elem, attrs){
      console.info('This is a link function of the directive');
    }
  }

}());
