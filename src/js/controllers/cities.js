angular
  .module('hiddenTravellr')
  .controller('CitiesIndexCtrl', CitiesIndexCtrl)
  .controller('CitiesShowCtrl', CitiesShowCtrl);

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
  function citiesDelete(){
    City.delete($state.params)
      .$promise
      .then((response) => {
        console.log('This is after deleting a city', response);
        $state.go('citiesIndex');
      });
  }
}
