(function() {

  angular
    .module('beerTracker.components.list', [])
    .controller('listController', listController);

  listController.$inject = ['$scope', 'getBeers'];

  function listController($scope, getBeers) {
    let vm = this;

    vm.getCheckIns = () => {
      vm.loading = true;
      getBeers.getCheckIns()
      .then((res, err) => {
        vm.checkIns = res.data.response.checkins.items;
        vm.loading = false;
      })
      .catch(() => vm.error = 'Hm, something went wrong.');
    };

    vm.getCheckIns();
  }
})();
