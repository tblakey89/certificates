(function() {
  'use strict';

  angular
    .module('accredible')
    .run(credentialFormTemplate);

  function credentialFormTemplate($templateCache) {
    $templateCache.put('add-credential-form.html',
      `
        <div class="jumbotron" ng-form="$ctrl.addCredentialForm">
          <h2>+ Add a Credential from {{$ctrl.name}}</h2>
          <input type="text" class="form-control" placeholder="magento URL" ng-model="$ctrl.url" name="url" ng-pattern="$ctrl.regExp" required>
          <p class="text-danger" ng-messages="$ctrl.addCredentialForm.url.$error" ng-if="$ctrl.addCredentialForm.$submitted">
            <span ng-message="required">Please enter a url before submitting</span>
            <span ng-message="pattern">Please enter a valid url for {{$ctrl.name}}</span>
          </p>
          <p><a class="btn btn-primary btn-lg" role="button" ng-click="$ctrl.verify()">Verify</a></p>
        </div>
      `
    )
  }
})();