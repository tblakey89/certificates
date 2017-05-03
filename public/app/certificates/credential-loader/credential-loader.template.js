(function() {
  'use strict';

  angular
    .module('accredible')
    .run('credentialLoaderTemplate', ['$templateCache', credentialLoaderTemplate]);

  function credentialLoaderTemplate($templateCache) {
    $templateCache.put('credential-loader.html',
      `
        <div class="jumbotron">
          <h2>Veryfying Credential</h2>
        </div>  
      `
    )
  }
})();