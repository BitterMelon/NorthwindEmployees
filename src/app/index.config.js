(function() {
  'use strict';

  angular
    .module('ifsEmployees')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(false);
  }

})();
