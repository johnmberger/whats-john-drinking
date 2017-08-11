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
        if (!err) {
          vm.topTenBeers = res.data.response.beers.items;
        } else {
          vm.error = 'We\'re having trouble connecting to Untappd. Please try later!';
        }
        vm.loading = false;
      })
      .catch(() => {
        vm.error = 'Untappd is mad at us right now. Try back in an hour or so!';
        vm.loading = false;
      });
    };

    vm.getBeers();
  }
})();
