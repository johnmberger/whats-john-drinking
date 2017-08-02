(function() {

  angular
    .module('beerTracker.components.stats', [])
    .controller('statsController', statsController);

  statsController.$inject = ['$scope'];

  function statsController($scope) {
    let vm = this;
  }
})();
