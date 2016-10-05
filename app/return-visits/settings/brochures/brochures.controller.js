(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .controller('BrochuresController', controller);

  /** @ngInject */
  function controller($log) {
    var vm = this;

    /** use revealing module pattern (vm.events, vm.model, vm.view) with function hoisting */
    // ui events
    vm.events = {};

    // model binding
    vm.model = {};

    // handles display logic
    vm.view = {};

    init();


    /** ------------------------------- start up functions ------------------------------ */
    function init() {
      $log.debug('got here');
    }


    /** --------------------------------- implementation -------------------------------- */



    /** ---------------------------- private helper functions --------------------------- */



  }
})();
