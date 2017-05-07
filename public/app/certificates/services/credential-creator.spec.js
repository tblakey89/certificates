require('angular-mocks');

describe('CredentialCreator', function() {
  var CredentialCreator;

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(angular.mock.module('accredible'));

  beforeEach(inject(function(_CredentialCreator_) {
    CredentialCreator = _CredentialCreator_;
  }));

  describe('#createDefault', function() {
    it('generates default credential', function() {
      var credential = CredentialCreator.createDefault();
      expect(credential.id).toEqual('10023910');
      expect(credential.name).toEqual('Existing Credential Course Name');
    });
  });

  describe('#createMagentoCredential', function() {
    it('generates credential with correct attributes', function() {
      var id = 'testId';
      var name = 'test credential';
      var date = 'May 05, 2017';
      var url = 'http://test.com'
      var credential = CredentialCreator.createMagentoCredential(name, id, date, url);
      expect(credential.id).toEqual(id);
      expect(credential.name).toEqual(name);
      expect(credential.date).toEqual(date);
    });
  });

});