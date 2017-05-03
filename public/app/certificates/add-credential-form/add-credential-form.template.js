(function() {
  'use strict';

  angular
    .module('accredible')
    .run('credentialFormTemplate', ['$templateCache', credentialFormTemplate]);

  function credentialFormTemplate($templateCache) {
    $templateCache.put('add-credential-form.html',
      `
        <div class="jumbotron" ng-form="$ctrl.addCredentialForm">
          <h2>+ Add a Credential from Magento</h2>
          <input type="text" class="form-control" placeholder="magento URL" name="url">
          <p><a class="btn btn-primary btn-lg" role="button">Verify</a></p>
        </div>
      `
    )
  }
})();