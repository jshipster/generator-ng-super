(function(){
	'use strict';

	angular
		.module('app.<%= module %>')
		.controller('<%= component %>', <%= component %>);

	function <%= component %>(){
		var vm = this;

		vm.testFunction = testFunction;

    /////////////////////

		function testFunction () {
			console.info('This is a test function');
		}
	}
}());
