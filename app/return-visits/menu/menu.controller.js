(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .controller('RvMenuController', controller);

  /** @ngInject */
  function controller($ionicSideMenuDelegate, $state, rvConstants) {
    var vm = this;

    /** use revealing module pattern (vm.events, vm.model, vm.view) with function hoisting */
    // ui events
    vm.events = {
      onMenuClicked: onMenuClicked,
      onMenuItemClicked: onMenuItemClicked
    };

    // model binding
    vm.model = {};

    // handles display logic
    vm.view = {
      settingsOptions: rvConstants.settingsOptions
    };

    init();


    /** ------------------------------- start up functions ------------------------------ */
    function init() {

    }


    /** --------------------------------- implementation -------------------------------- */
    function onMenuClicked() {
      // opens/closes the slide menu
      $ionicSideMenuDelegate.toggleLeft();
    }

    function onMenuItemClicked(route) {
      $state.go(route);
    }


    /** ---------------------------- private helper functions --------------------------- */



  }
})();
