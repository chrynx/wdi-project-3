angular
  .module('hiddenTravellr')
  .controller('CitiesIndexCtrl', CitiesIndexCtrl)
  .controller('CitiesShowCtrl', CitiesShowCtrl);


CitiesIndexCtrl.$inject = [ 'City'];
function CitiesIndexCtrl(City) {
  const vm = this;
  vm.all = City.query();
  window.scrollTo(0,0);
}
CitiesShowCtrl.$inject = ['$state',  'City'];
function CitiesShowCtrl($state, City) {
  const vm = this;
  vm.city = City.get($state.params);
  window.scrollTo(0,0);
}
