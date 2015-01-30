(function(){
	'use strict';

	angular
		.module('app.<%= module %>')
		.factory('<%= component %>', <%= component %>)

	function <%= component %>(){
		var service = {
			testFunction: testFunction
		}

		return service;

		////////////////////

		function testFunction () {
			console.info('This is a test function');
		}
	}
}());

