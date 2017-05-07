(function() {
  'use strict';

  angular
  	.module('accredible')
  	.controller('CertificateController', ['$http', 'MagentoParser', 'CredentialCreator', CertificateController]);

  function CertificateController($http, MagentoParser, CredentialCreator) {
  	var vm = this;
    vm.loading = false;
    vm.credentials = [];
    vm.magentoPattern = /https?:\/{2}u\.magento\.com\/certification\/directory\/dev\/[0-9]+/;
  	vm.getMagentoUrl = getMagentoUrl;
    activate();

    function activate() {
      vm.credentials.push(CredentialCreator.createDefault());
    }

  	function getMagentoUrl(url) {
      vm.loading = true;
      $http({
        method: 'GET',
        url: '/get-url?url=' + url
      }).then(function(response) {
        vm.credentials = vm.credentials.concat(MagentoParser.parse(response.data.html, url));
      }, function(response) {
        alert('There was an error retrieving the content from the server');
      }).finally(function() {
        vm.loading = false;
      });
  	}
  }

})();