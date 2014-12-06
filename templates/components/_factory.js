(function(){
	'use strict';

	angular
		.module('<%= module %>')
		.factory('<%= component %>', <%= component %>)

	<%= component %>.$inject = [];

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

