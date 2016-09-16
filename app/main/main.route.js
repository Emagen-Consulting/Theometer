(function() {
  'use strict';

  angular.module('theometer.main')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

    // ROUTING with ui.router
    // $urlRouterProvider.otherwise('/main/list');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'common/nav/tabs.html'
      })
        .state('main.list', {
          url: '/list',
          views: {
            'tab-dashboard': {
              templateUrl: 'main/templates/list.html',
              // controller: 'SomeCtrl as ctrl'
            }
          }
        })
        .state('main.listDetail', {
          url: '/list/detail',
          views: {
            'tab-dashboard': {
              templateUrl: 'main/templates/list-detail.html',
              // controller: 'SomeCtrl as ctrl'
            }
          }
        })
        // .state('main.debug', {
        //   url: '/debug',
        //   views: {
        //     'tab-debug': {
        //       templateUrl: 'main/templates/debug.html',
        //       controller: 'DebugCtrl as ctrl'
        //     }
        //   }
        // })
    ;
  }
})();
