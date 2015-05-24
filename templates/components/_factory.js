/**
 * @ngdoc factory
 * @module app.<%= module %>
 * @name <%= component %>
 * @description < description placeholder >
 * @returns {object} < returns placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.<%= module %>')
		.factory('<%= component %>', <%= component %>);

  /* @ngInject */
  function <%= component %>(){
		return {
			testFunction: testFunction
		};

		////////////////////

		function testFunction(){
			console.info('This is a test function');
		}
	}

}());
