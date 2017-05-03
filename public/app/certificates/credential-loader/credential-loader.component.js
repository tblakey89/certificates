(function() {
  'use strict';

  angular
    .module('accredible')
    .component('credentialLoader', {
      bindings: {
        credential: '<'
      },
      templateUrl: 'credential-loader.html',
    });
})();