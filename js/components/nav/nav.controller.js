(function() {

  angular
    .module('beerTracker.components.nav', [])
    .controller('navController', navController);

  navController.$inject = ['$scope', '$location'];

  function navController($scope, $location) {
    let vm = this;

    vm.active = $location.path();
  }

})();
