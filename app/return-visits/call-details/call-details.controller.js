(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .controller('CallDetailsController', controller);

  /** @ngInject */
  function controller() {
    var vm = this;

    /** use revealing module pattern (vm.events, vm.model, vm.view) with function hoisting */
    // ui events
    vm.events = {};

    // model binding
    vm.model = {};

    // handles display logic
    vm.view = {
      tabIndex: 0
    };

    init();


    /** ------------------------------- start up functions ------------------------------ */
    function init() {

    }


    /** --------------------------------- implementation -------------------------------- */



    /** ---------------------------- private helper functions --------------------------- */



  }
})();
