/**
 * @ngdoc object
 * @name app.<%= module %>.constant:<%= component %>
 * @description < description placeholder >
 * @example
 <pre>
 angular.module("someModule", [])
 .controller("some", controller);

 function controller(<%= component %>, someService){
  var vm = this;
  //use the injected constant
  };
 </pre>
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
