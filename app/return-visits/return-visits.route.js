(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

    var root = 'return-visits';

    // ROUTING with ui.router
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state(root, {
        url: '/' + root,
        abstract: true,
        templateUrl: root + '/return-visits.view.html',
        controller: 'RvMenuController',
        controllerAs: 'menu'
      })


      .state(root + '.list', {
        url: '/list',
        views: {
          'tab-return-visits': {
            templateUrl: root + '/call-list/call-list.view.html',
            controller: 'CallListController',
            controllerAs: 'vm'
          }
        }
      })


    ;
  }
})();
