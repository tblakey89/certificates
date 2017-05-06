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
      vm.addCredentialForm.$setSubmitted(true);
      if (vm.addCredentialForm.$valid) {
        vm.getUrl(vm.addCredentialForm.url.$viewValue);
      }
    }
  }
})();