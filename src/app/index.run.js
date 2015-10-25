(function() {
  'use strict';

  angular
    .module('ifsEmployees')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
