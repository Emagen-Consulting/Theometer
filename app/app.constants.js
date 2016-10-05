(function() {
  'use strict';

  angular.module('theometer.returnVisits')
    .constant('rvConstants', {
      settingsOptions: [
        { route: 'books', text: 'Books' },
        { route: 'brochures', text: 'Brochures' },
        { route: 'household-member-types', text: 'Household Member Types' },
        { route: 'invitations', text: 'Invitations' },
        { route: 'magazines', text: 'Magazines' },
        { route: 'partners', text: 'Partners' },
        { route: 'presentations', text: 'Presentations' },
        { route: 'scriptures', text: 'Scriptures' },
        { route: 'tracts', text: 'Tracts' },
        { route: 'videos', text: 'Videos' },
        { route: 'visit-types', text: 'Visit Types' }
      ]
    });

})();
