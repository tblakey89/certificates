(function() {
  'use strict';

  angular
    .module('accredible')
    .component('credentialLoader', {
      bindings: {
        visible: '<'
      },
      templateUrl: 'credential-loader.html',
    });
})();