(function() {
  'use strict';

  angular
    .module('accredible')
    .component('credential', {
      bindings: {
        credential: '<'
      },
      templateUrl: 'credential.html',
    });
})();