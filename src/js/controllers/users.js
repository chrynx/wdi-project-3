angular
  .module('hiddenTravellr')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$state', '$scope'];
function UsersShowCtrl(User, $state, $scope) {
  const vm = this;
  vm.user = User.get($state.params);
  console.log('Inside users controller');
  $scope.profileCities = false;
  $scope.profileLocations = false;
  $scope.profileNavCity = function () {
    $scope.profileInformation = $scope.profileInformation ? false : false;
    $scope.profileCities = $scope.profileCities ? true : true;
    $scope.profileLocations = $scope.profileLocations ? false : false;
  };
  $scope.profileNavLocation = function () {
    $scope.profileInformation = $scope.profileInformation ? false : false;
    $scope.profileCities = $scope.profileCities ? false : false;
    $scope.profileLocations = $scope.profileLocations ? true : true;
  };

}
