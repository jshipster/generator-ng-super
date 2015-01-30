(function(){

  angular
    .module('app.<%= module %>')
    .filter('<%= component %>', <%= component %>);

  function <%= component %>(){
    return function (input){
      return '<%= component %> filter: ' + input;
    }
  }

}());
