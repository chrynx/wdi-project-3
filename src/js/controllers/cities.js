angular
  .module('hiddenTravellr')
  .controller('CitiesIndexCtrl', CitiesIndexCtrl);

CitiesIndexCtrl.$inject = [ 'City'];
function CitiesIndexCtrl(City) {
  const vm = this;
  vm.all = City.query();
}
