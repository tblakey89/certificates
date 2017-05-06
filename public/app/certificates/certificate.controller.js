(function() {
  'use strict';

  angular
  	.module('accredible')
  	.controller('CertificateController', ['$http', CertificateController]);

  function CertificateController($http) {
  	var vm = this;
    vm.loading = false;
    vm.credentials = [];
    vm.magentoPattern = /https?:\/{2}u\.magento\.com\/certification\/directory\/dev\/[0-9]+/;
  	vm.getMagentoUrl = getMagentoUrl;
    activate();

    function activate() {
      vm.credentials.push(templateCertificate());
    }

  	function getMagentoUrl(url) {
      vm.loading = true;
      $http({
        method: 'GET',
        url: '/get-url?url= + ' + url
      }).then(function(response) {
        alert(response);
        vm.loading = false;
      }, function(response) {
        alert('There was an error retrieving the content from the server')
        vm.loading = false;
      });
  	}

    function templateCertificate() {
      return {
        id: '10023910',
        name: 'Existing Credential Course Name',
        date: 'Mar 20, 2017',
        verifiedBy: 'Accredible',
        url: 'https://www.credential.net/100000005'
      };
    }
  }

})();