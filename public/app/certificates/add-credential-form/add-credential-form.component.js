(function() {
  'use strict';

  angular
    .module('accredible')
    .component('addCredentialForm', {
      bindings: {
        getUrl: '<',
        name: '<',
        regExp: '<'
      },
      templateUrl: 'add-credential-form.html',
      controller: AddCredentialController
    });

  function AddCredentialController() {
    var vm = this;
    vm.verify = verify;
   
    function verify() {
      vm.addCredentialForm.$setSubmitted();
      if (vm.addCredentialForm.$valid) {
        vm.getUrl(vm.addCredentialForm.url.$viewValue);
        vm.addCredentialForm.$setPristine();
        vm.url = undefined;
      }
    }
  }
})();