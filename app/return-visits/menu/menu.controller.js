(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .controller('RvMenuController', controller);

  /** @ngInject */
  function controller($ionicSideMenuDelegate) {
    var vm = this;

    /** use revealing module pattern (vm.events, vm.model, vm.view) with function hoisting */
    // ui events
    vm.events = {
      onMenuClicked: onMenuClicked
    };

    // model binding
    vm.model = {};

    // handles display logic
    vm.view = {
      settingsOptions: [
        'Books',
        'Brochures',
        'Household Member Types',
        'Invitations',
        'Magazines',
        'Partners',
        'Presentations',
        'Scriptures',
        'Tracts',
        'Videos',
        'Visit Types'
      ]
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


    /** ---------------------------- private helper functions --------------------------- */



  }
})();
