(function() {
  'use strict';

  angular.module('theometer')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {

    $urlRouterProvider.otherwise('/main/list');

  }
})();
