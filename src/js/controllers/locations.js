angular
  .module('hiddenTravellr')
  .controller('LocationsIndexCtrl', LocationsIndexCtrl)
  .controller('LocationsNewCtrl', LocationsNewCtrl)
  .controller('LocationsShowCtrl', LocationsShowCtrl)
  .controller('LocationsEditCtrl', LocationsEditCtrl);

LocationsIndexCtrl.$inject = [ 'Location'];
function LocationsIndexCtrl(Location) {
  const vm = this;
  vm.all = Location.query();
  console.log('this is inside the locationsIndexCtrl', vm.all);
}

LocationsNewCtrl.$inject = ['$state', 'Location', 'City'];
function LocationsNewCtrl($state, Location, City) {
  const vm  = this;
  vm.cities = City.query();
  vm.create = locationsCreate;

  function locationsCreate(){
    Location
      .save(vm.location)
      .$promise
      .then((response) => {
        console.log('This is after creating a location', response);
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
      .then((response) => {
        console.log('This is after deleting a location', response);
        $state.go('locationsIndex');
      });
  }
}

LocationsEditCtrl.$inject = ['$state', 'Location', 'City'];
function LocationsEditCtrl($state, Location, City) {
  const vm = this;
  vm.location = {};
  vm.cities = City.query();
  vm.update = locationsUpdate;

  locationsShow();

  function locationsShow(){
    Location
      .get($state.params)
      .$promise
      .then((location) => {
        console.log('This is inside the locationsShow function', location);

        vm.location = location;
        // To make sure that when we send back the city, we're just sending back the id, not the whole city object
        // Originally vm.location.city is the whole object because we are populating it in the show controller in the Express API
        vm.location.city = vm.location.city.id;
      });
  }

  function locationsUpdate(){
    Location
      .update($state.params, vm.location)
      .$promise
      .then((response) => {
        console.log('This is after updating the location', response);
        $state.go('locationsShow', $state.params);
      });
  }
}
