(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .controller('CallListController', controller);

  /** @ngInject */
  function controller($ionicPopover, $log, $scope, $state, modalService) {
    var vm = this;

    /** use revealing module pattern (vm.events, vm.model, vm.view) with function hoisting */
    // ui events
    vm.events = {
      onAddClicked: onAddClicked,
      onCallTypeChanged: onCallTypeChanged,
      onSortOptionsChanged: onSortOptionsChanged,
      popover: {
        onChangeView: onPopoverViewClick,
        open: onOpenPopover
      }
    };

    // model binding
    vm.model = {
      data: [
        { id: 1, isHome: true,  name: 'Penelope Cruz',   visitDate: 'Sun Jul 18', isActive: true, attemptsSinceContact: null, daysSinceContact: 7, address: '1740 N. 80th Ln, Phoenix, AZ 85002' },
        { id: 2, isHome: false, name: 'Michael Pena',    visitDate: 'Sun Jul 18', isActive: true, attemptsSinceContact: 2, daysSinceContact: 12, address: '10140 Preston Ln, Tolleson, AZ 85001' },
        { id: 3, isHome: true,  name: 'Jennifer Garner', visitDate: 'Sun Jul 18', isActive: true, attemptsSinceContact: null, daysSinceContact: 22, address: '3802 N. 103rd Ave, Tolleson, AZ 85001' },
        { id: 4, isHome: true,  name: 'Tom Cruise',      visitDate: 'Sun Jul 18', isActive: true, attemptsSinceContact: null, daysSinceContact: 12, address: '7955 Hammond, Phoenix, AZ 85002' },
        { id: 5, isHome: false, name: 'Seamus Deaver',   visitDate: 'Sun Jul 18', isActive: true, attemptsSinceContact: 3, daysSinceContact: 12, address: 'Cart by the beach' },
        { id: 5, isHome: false, name: 'Nathan Fillion',   visitDate: 'Sun Jul 18', isActive: false, attemptsSinceContact: 3, daysSinceContact: 12, address: '7899 Watson, Phoenix, AZ 85001' }
      ],
      options: {
        callType: 'Active Calls',
        sorting: 'Newest'
      }
    };

    // handles display logic
    vm.view = {
      callTypes: ['Active Calls', 'Archived Calls', 'All Calls'],
      popover: null,
      popoverIndex: 0,
      sortOptions: ['Oldest', 'Newest', 'Name']
    };

    init();


    /** ------------------------------- start up functions ------------------------------ */
    function init() {
      $ionicPopover.fromTemplateUrl('return-visits/call-list/popover.partial.html', {
        scope: $scope
      }).then(function(popover) {
        vm.view.popover = popover;
      });

      $scope.$on('$destroy', function() {
        vm.view.popover.remove();
      });

      $log.debug('states', $state.get());
    }


    /** --------------------------------- implementation -------------------------------- */
    function onAddClicked() {
      $log.debug('add clicked');
      modalService.show('return-visits/add-call/add-call.modal.view.html', 'AddCallController as vm');
    }

    function onCallTypeChanged() {
      $log.debug('call type changed');
    }

    function onPopoverViewClick(index) {
      vm.view.popoverIndex = index;
    }

    function onOpenPopover($event) {
      vm.view.popoverIndex = 0;
      vm.view.popover.show($event);
    }

    function onSortOptionsChanged() {
      $log.debug('sorting changed');
    }


    /** ---------------------------- private helper functions --------------------------- */



  }
})();
