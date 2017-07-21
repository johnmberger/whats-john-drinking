(function() {

  angular
    .module('beerTracker.components.topTen', [])
    .controller('topTenController', topTenController);

  topTenController.$inject = ['$scope', 'getTopTen'];

  function topTenController($scope, getTopTen) {
    let vm = this;

    vm.getBeers = () => {
      getTopTen.getBeers()
      .then((res, err) => {
        vm.topTenBeers = res.data.response.beers.items;
      })
      .catch(() => vm.error = 'Hm, something went wrong.');
    };

    vm.getBeers();
  }
})();
