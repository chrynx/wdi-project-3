angular
  .module('hiddenTravellr')
  .controller('CitiesIndexCtrl', CitiesIndexCtrl)
  .controller('CitiesNewCtrl', CitiesNewCtrl)
  .controller('CitiesShowCtrl', CitiesShowCtrl);

CitiesIndexCtrl.$inject = [ 'City'];
function CitiesIndexCtrl(City) {
  const vm = this;
  vm.all = City.query();
}

CitiesNewCtrl.$inject = ['$state', 'City', 'Category'];
function CitiesNewCtrl($state, City, Category) {
  const vm  = this;
  vm.categories = Category.query();
  vm.create = citiesCreate;

  function citiesCreate(){
    City
      .save(vm.city)
      .$promise
      .then(() => {
        $state.go('citiesIndex');
      });
  }
}

CitiesShowCtrl.$inject = ['$state', 'City'];
function CitiesShowCtrl($state, City) {
  const vm = this;
  vm.city = City.get($state.params);
  vm.delete = citiesDelete;

  function citiesDelete(){
    City.delete($state.params)
      .$promise
      .then(() => {
        $state.go('citiesIndex');
      });
  }
}
