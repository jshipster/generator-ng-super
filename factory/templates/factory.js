(function(){
	'use strict';

	angular
		.module('<%= appname %>')
		.factory('<%= name %>', <%= name %>)

	<%= name %>.$inject = [];

	function <%= name %>(){
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

