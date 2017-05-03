(function() {
  'use strict';

  angular
  	.module('accredible')
  	.controller('CertificateController', [CertificateController]);

  function CertificateController() {
  	var vm = this;
  	vm.getMagentoUrl = getMagentoUrl;

  	function getMagentoUrl() {

  	}
  }

})();