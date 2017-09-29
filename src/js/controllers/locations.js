angular
  .module('hiddenTravellr')
  .controller('LocationsIndexCtrl', LocationsIndexCtrl)
  .controller('LocationsNewCtrl', LocationsNewCtrl)
  .controller('LocationsShowCtrl', LocationsShowCtrl);

LocationsIndexCtrl.$inject = [ 'Location'];
function LocationsIndexCtrl(Location) {
  const vm = this;
  vm.all = Location.query();
}

LocationsNewCtrl.$inject = ['$state', 'Location'];
function LocationsNewCtrl($state, Location) {
  const vm  = this;
  vm.create = locationsCreate;

  function locationsCreate(){
    Location
      .save(vm.location)
      .$promise
      .then(() => {
        $state.go('locationsIndex');
      });
  }
}

LocationsShowCtrl.$inject = ['$state', 'Location'];
function LocationsShowCtrl($state, Location) {
  const vm = this;
  vm.location = Location.get($state.params);
  vm.delete = locationsDelete;

  function locationsDelete(){
    Location.delete($state.params)
      .$promise
      .then(() => {
        $state.go('locationsIndex');
      });
  }
}
