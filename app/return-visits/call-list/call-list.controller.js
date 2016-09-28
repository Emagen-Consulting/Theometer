(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .controller('CallListController', controller);

  /** @ngInject */
  function controller() {
    var vm = this;

    /** use revealing module pattern (vm.events, vm.model, vm.view) with function hoisting */
    // ui events
    vm.events = {};

    // model binding
    vm.model = {
      data: [
        { id: 1, isHome: true,  name: 'Penelope Cruz',   visitDate: 'Sun Jul 18', attemptsSinceContact: null, daysSinceContact: 7, address: '1740 N. 80th Ln, Phoenix, AZ 85002' },
        { id: 2, isHome: false, name: 'Michael Pena',    visitDate: 'Sun Jul 18', attemptsSinceContact: 2, daysSinceContact: 12, address: '10140 Preston Ln, Tolleson, AZ 85001' },
        { id: 3, isHome: true,  name: 'Jennifer Garner', visitDate: 'Sun Jul 18', attemptsSinceContact: null, daysSinceContact: 22, address: '3802 N. 103rd Ave, Tolleson, AZ 85001' },
        { id: 4, isHome: true,  name: 'Tom Cruise',      visitDate: 'Sun Jul 18', attemptsSinceContact: null, daysSinceContact: 12, address: '7955 Hammond, Phoenix, AZ 85002' },
        { id: 5, isHome: false, name: 'Seamus Deaver',   visitDate: 'Sun Jul 18', attemptsSinceContact: 3, daysSinceContact: 12, address: 'Cart by the beach' }
      ]
    };

    // handles display logic
    vm.view = {};

    init();


    /** ------------------------------- start up functions ------------------------------ */
    function init() {
      console.log('got here');
    }


    /** --------------------------------- implementation -------------------------------- */



    /** ---------------------------- private helper functions --------------------------- */



  }
})();
