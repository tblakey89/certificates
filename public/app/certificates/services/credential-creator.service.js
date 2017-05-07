(function() {
  'use strict';

  angular
    .module('accredible')
    .factory('CredentialCreator', [CredentialCreator]);

  function CredentialCreator() {
    function createDefault() {
      return {
        id: '10023910',
        name: 'Existing Credential Course Name',
        date: 'Mar 20, 2017',
        verifiedBy: 'Accredible',
        url: 'https://www.credential.net/100000005'
      };
    }

    function createMagentoCredential(name, id, date, url) {
      return {
        id: id,
        name: name,
        date: date,
        verifiedBy: 'Magento',
        url: url
      };
    }

    return {
      createDefault: createDefault,
      createMagentoCredential: createMagentoCredential
    };
  }
})();