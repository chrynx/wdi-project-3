angular
  .module('hiddenTravellr')
  .controller('CitiesIndexCtrl', CitiesIndexCtrl)
  .controller('CitiesShowCtrl', CitiesShowCtrl)
  .controller('CitiesNewCtrl', CitiesNewCtrl);

CitiesIndexCtrl.$inject = [ 'City'];
function CitiesIndexCtrl(City) {
  const vm = this;
  vm.all = City.query();
  console.log('this is inside the citiesIndexCtrl', vm.all);
}

CitiesShowCtrl.$inject = ['$state', 'City'];
function CitiesShowCtrl($state, City) {
  const vm = this;
  vm.city = City.get($state.params);
  vm.delete = citiesDelete;
  vm.places = [];
  vm.type = 'bar';
  vm.radius = 1000;
  vm.photo = null;

  function citiesDelete(){
    City.delete($state.params)
      .$promise
      .then((response) => {
        console.log('This is after deleting a city', response);
        $state.go('citiesIndex');
      });
  }

}
CitiesNewCtrl.$inject = ['$state', 'City', 'Location'];
function CitiesNewCtrl($state, City, Location) {
  const vm  = this;
  // to check - do you need all locations on a city new page
  // vm.locations = Location.query();
  vm.create = citiesCreate;

  function citiesCreate(){
    City
      .save(vm.city)
      .$promise
      .then((response) => {
        console.log('This is after creating a city', response);
        $state.go('citiesIndex');
      });
  }
}
