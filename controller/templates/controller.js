(function(){
	'use strict';

	angular
		.module('<%= appname %>')
		.controller('<%= name %>', <%= name %>)

	<%= name %>.$inject = [];

	function <%= name %>(){
		vm = this;

		vm.testFunction = testFunction;

		function testFunction () {
			console.info('This is a test function');
		}
	}
}());

