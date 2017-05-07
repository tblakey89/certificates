var moment = require('moment');

(function() {
  'use strict';

  // service to parse the html response from the magento certificate url
  angular
    .module('accredible')
    .factory('MagentoParser', ['CredentialCreator', MagentoParser]);

  function MagentoParser(CredentialCreator) {
    // we assume the html will be from the certificate table as provided
    // by the magento website
    function parse(html, url) {
      var certificateTable = angular.element(html);
      return certificatesFound(certificateTable).map(function(certificateElement) {
        var name = parseString(certificateElement, 0)
        var id = parseString(certificateElement, 1);
        var date = parseDate(certificateElement, 2);
        return CredentialCreator.createMagentoCredential(name, id, date, url);
      });
    }

    function certificatesFound(tableElements) {
      // can't use filter on jQlite array, as not proper array
      var certificates = []
      angular.forEach(tableElements, function(element) {
        if (element.classList && (element.classList.contains('odd') || element.classList.contains('even'))) {
          certificates.push(element);
        }
      });
      return certificates;
    }

    function parseString(certElement, index) {
      var string = certElement.children[index].innerText;
      return string.trim();
    }

    function parseDate(certElement, index) {
      var dateString = certElement.children[index].innerText;
      var date = dateString.trim();
      return moment(date).format('MMM D, YYYY');
    }

    return {
      parse: parse
    };
  }
})();