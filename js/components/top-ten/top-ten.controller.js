(function() {

  angular
    .module('beerTracker.components.topTen', [])
    .controller('topTenController', topTenController);

  topTenController.$inject = ['$scope', 'getTopTen'];

  function topTenController($scope, getTopTen) {
    let vm = this;

    vm.getBeers = () => {
      vm.loading = true;
      getTopTen.getBeers()
      .then((res, err) => {
        vm.topTenBeers = res.data.response.beers.items;
        vm.loading = false;
      })
      .catch(() => vm.error = 'Hm, something went wrong.');
    };

    vm.getBeers();
  }
})();
