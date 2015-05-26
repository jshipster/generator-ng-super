/**
 * @ngdoc controller
 * @name app.<%= module %>.controller:<%= component %>
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

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.<%= module %>.controller:<%= component %>
     * @description
     * My Description rules
     */
    function testFunction(num){
			console.info('This is a test function');
		}
	}

}());
