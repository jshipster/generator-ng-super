/**
 * @ngdoc value
 * @module app.<%= module %>
 * @name <%= component %>
 * @description < description placeholder >
 */

(function(){

  'use strict';

  var <%= component %> = {
    someValue: 'obviouslyHasSomeValue'
  };

	angular
		.module('app.<%= module %>')
		.value('<%= component %>', <%= component %>);

}());

