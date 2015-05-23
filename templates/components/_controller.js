/**
 * @ngdoc controller
 * @module app.<%= module %>
 * @name <%= component %>
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.<%= module %>')
		.controller('<%= component %>', <%= component %>);

  /* @ngInject */
	function <%= component %>(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

		function testFunction(){
			console.info('This is a test function');
		}
	}

}());
