(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, rvConstants) {

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

      .state(root + '.call-details', {
        url: '/call-details/:id',
        views: {
          'tab-return-visits': {
            templateUrl: root + '/call-details/call-details.view.html',
            controller: 'CallDetailsController',
            controllerAs: 'vm'
          }
        }
      })

      // settings
      .state(root + '.display-rules', {
        url: '/display-rules',
        views: {
          'tab-return-visits': {
            templateUrl: root + '/settings/display-rules/display-rules.view.html',
            controller: 'DisplayRulesController',
            controllerAs: 'vm'
          }
        }
      })

    ;

    function snakeToCamel(s) {
      s = s.charAt(0).toUpperCase() + s.slice(1);
      return s.replace(/(\-\w)/g, function(m) { return m[1].toUpperCase(); });
    }

    // add routes from settings list
    _.each(rvConstants.settingsOptions, function(item) {
      $stateProvider
        .state(root + '.' + item.route, {
          url: '/' + item.route,
          views: {
            'tab-return-visits': {
              templateUrl: root + '/settings/' + item.route + '/' + item.route + '.view.html',
              controller: snakeToCamel(item.route) + 'Controller',
              controllerAs: 'vm'
            }
          }
        });
    });
  }
})();
