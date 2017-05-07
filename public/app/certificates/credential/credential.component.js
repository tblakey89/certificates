(function() {
  'use strict';

  angular
    .module('accredible')
    .component('credential', {
      bindings: {
        credential: '<'
      },
      controller: CredentialController,
      templateUrl: 'credential.html'
    });

  function CredentialController() {
    var vm = this;
    vm.selectImage = selectImage;
   
    function selectImage() {
      switch(vm.credential.name) {
        case 'Developer':
          return 'https://u.magento.com/media/certification/logos/big/developer.png';
          break;
        case 'Developer Plus':
          return 'https://u.magento.com/media/certification/logos/big/developer_plus.png';
          break;
        default:
          return 'certificate.png';
      }
    }
  }
})();