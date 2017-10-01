
angular
  .module('hiddenTravellr')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('LogoutCtrl', LogoutCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};

  function submit() {
    $auth.signup(vm.user)
      .then(() => {
        $state.go('login');
      });
  }
  vm.submit = submit;
}

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};
  function submit() {
    $auth.login(vm.credentials)
      .then(() => {
        $state.go('citiesIndex');
      });
  }

  vm.submit = submit;
}

LogoutCtrl.$inject = ['$auth', '$state'];
function LogoutCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};
  $auth.logout()
    .then(() => {
      $state.go('citiesIndex');
    });
}
