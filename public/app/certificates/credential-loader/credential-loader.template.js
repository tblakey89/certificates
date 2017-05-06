(function() {
  'use strict';

  angular
    .module('accredible')
    .run(credentialLoaderTemplate);

  function credentialLoaderTemplate($templateCache) {
    $templateCache.put('credential-loader.html',
      `
        <div class="jumbotron" ng-if="$ctrl.visible">
          <h2>Veryfying Credential</h2>
        </div>  
      `
    )
  }
})();