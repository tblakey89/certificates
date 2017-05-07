(function() {
  'use strict';

  angular
    .module('accredible')
    .run(credentialTemplate);

  function credentialTemplate($templateCache) {
    $templateCache.put('credential.html',
      `
        <div class="row credential">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-8">
                <h3>{{$ctrl.credential.name}}</h3>
                <p><strong>ID</strong> {{$ctrl.credential.id}}</p>
                <p><strong>Issued on:</strong> {{$ctrl.credential.date}}</p>
                <p><strong>Verified:</strong> {{$ctrl.credential.verifiedBy}}</p>
                <p><a href="{{$ctrl.credential.url}}">{{$ctrl.credential.url}}</a></p>
              </div>
              <div class="col-md-4">
                <img ng-src="{{$ctrl.selectImage()}}" class="img-responsive">
              </div>
            </div>
          </div>
        </div>
      `
    )
  }
})();