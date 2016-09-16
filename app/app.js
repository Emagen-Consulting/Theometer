(function() {
  'use strict';


  angular.module('theometer', [
    // angular modules

    // 3rd party modules
    'ionic',
    'ngCordova',
    'ui.router',

    // app modules
    'theometer.main',
    'theometer.returnVisits'
  ]);

  angular.module('theometer.main', []);
  angular.module('theometer.returnVisits', []);

})();

