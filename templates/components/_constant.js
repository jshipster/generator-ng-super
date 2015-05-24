/**
 * @ngdoc constant
 * @module app.<%= module %>
 * @name <%= component %>
 * @description < description placeholder >
 */

(function(){

  'use strict';

  var <%= component %> = {
    someConstant: 'hasSomeValue'
  };

	angular
		.module('app.<%= module %>')
		.constant('<%= component %>', <%= component %>);

}());
