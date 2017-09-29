angular // Telling the machine that we are using angular
  .module('hiddenTravellr') // The current module's name
  .factory('ErrorHandler', ErrorHandler); // The factory reference followed by factory name

ErrorHandler.$inject = ['$rootScope']; // string that we do not want minified
function ErrorHandler($rootScope) { // errorhandler function to handle errors
  return { // return the value inside the object
    responseError: function(err) { // An error associated with the response with a function which has the error as an argument
      console.log('Inside error handler', err);
      $rootScope.$broadcast('error', err);
      throw err;
    }
  };
}
