(function() {
  'use strict';

  angular
    .module('accredible')
    .run(credentialLoaderTemplate);

  function credentialLoaderTemplate($templateCache) {
    $templateCache.put('credential-loader.html',
      `
        <div class="jumbotron loader" ng-if="$ctrl.visible">
          <h2>Verifying Credential</h2>
        </div>  
      `
    )
  }
})();