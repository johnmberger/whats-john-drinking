(function() {

  'use strict';

  angular
    .module('getTopTen', [])
    .service('getTopTen', GetTopTen);

  function GetTopTen($http) {
    let vm = this;
    vm.getBeers = () => $http({method: 'GET', url: 'https://beer-proxy.herokuapp.com/top-ten'});
  }

})();
