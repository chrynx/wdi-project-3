angular // telling the machine we are using angular
  .module('hiddenTravellr') // the current module's name
  .config(Auth); //the name of the config file

Auth.$inject = ['$authProvider']; // words that we do not want minified
function Auth($authProvider) { //the auth function that configures the $auth module we get from satellizer
  $authProvider.signupUrl = '/api/register'; // the url for the register page of the app
  $authProvider.loginUrl = '/api/login'; // the url for the login page of the app
  $authProvider.facebook({
    url: '/api/oauth/facebook',
    clientId: '172806373276831'
  });
  console.log('facebook');
}
