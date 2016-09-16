(function() {
  'use strict';

  angular.module('theometer.ministry')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

    var root = 'ministry';

    // ROUTING with ui.router
    $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
      .state(root, {
        url: '/' + root,
        abstract: true,
        templateUrl: 'common/nav/tabs.html'
      })


      .state(root + '.list', {
        url: '/list',
        views: {
          'tab-ministry': {
            templateUrl: root + '/views/list.html',
            // controller: 'SomeCtrl as vm'
          }
        }
      })

      .state(root + '.debug', {
        url: '/debug',
        views: {
          'tab-ministry': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      })

    ;
  }
})();
