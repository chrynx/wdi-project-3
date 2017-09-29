angular // telling the machine we are using angular
  .module('hiddenTravellr') // the current module's name
  .config(Interceptors); // A config file named Interceptors
Interceptors.$inject = ['$httpProvider'];
function Interceptors($httpProvider) {
  $httpProvider.interceptors.push('ErrorHandler');
}
