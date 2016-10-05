(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .controller('AddCallController', controller);

  /** @ngInject */
  function controller($scope, $log) {
    var vm = this;

    /** use revealing module pattern (vm.events, vm.model, vm.view) with function hoisting */
    // ui events
    vm.events = {
      onClose: onCloseModal
    };

    // model binding
    vm.model = {};

    // handles display logic
    vm.view = {};

    init();


    /** ------------------------------- start up functions ------------------------------ */
    function init() {
      $log.debug('scope', $scope);
    }


    /** --------------------------------- implementation -------------------------------- */
    function onCloseModal() {
      $scope.modal.hide();
    }


    /** ---------------------------- private helper functions --------------------------- */



  }
})();
