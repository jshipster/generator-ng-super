(function(){

  angular
    .module('app.<%= module %>')
    .filter('<%= component %>', <%= component %>);

  /* @ngInject */
  function <%= component %>(){
    return function (input){
      return '<%= component %> filter: ' + input;
    }
  }

}());
