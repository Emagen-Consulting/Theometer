(function () {
  'use strict';

  angular.module('theometer.common')
    .service('modalService', Service);

  /** @ngInject */
  function Service($ionicModal, $rootScope, $q, $injector, $controller) {
    var service = this;

    service.show = show;


    /** ---------------------------- private helper functions --------------------------- */

    // Code found at https://forum.ionicframework.com/t/ionic-modal-service-with-extras/15357
    function show(templateUrl, controller, parameters) {
      // Grab the injector and create a new scope
      var deferred = $q.defer(),
        ctrlInstance,
        modalScope = $rootScope.$new(),
        thisScopeId = modalScope.$id;

      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: modalScope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        modalScope.modal = modal;

        modalScope.openModal = function () {
          modalScope.modal.show();
        };
        modalScope.closeModal = function (result) {
          deferred.resolve(result);
          modalScope.modal.hide();
        };
        modalScope.$on('modal.hidden', function (thisModal) {
          if (thisModal.currentScope) {
            var modalScopeId = thisModal.currentScope.$id;
            if (thisScopeId === modalScopeId) {
              deferred.resolve(null);
              _cleanup(thisModal.currentScope);
            }
          }
        });

        // Invoke the controller
        var locals = {'$scope': modalScope, 'parameters': parameters};
        var ctrlEval = _evalController(controller);
        ctrlInstance = $controller(controller, locals);
        if (ctrlEval.isControllerAs) {
          ctrlInstance.openModal = modalScope.openModal;
          ctrlInstance.closeModal = modalScope.closeModal;
        }

        modalScope.modal.show();

      }, function (err) {
        deferred.reject(err);
      });

      return deferred.promise;
    }

    function _cleanup(scope) {
      scope.$destroy();
      if (scope.modal) {
        scope.modal.remove();
      }
    }

    function _evalController(ctrlName) {
      var result = {
        isControllerAs: false,
        controllerName: '',
        propName: ''
      };
      var fragments = (ctrlName || '').trim().split(/\s+/);
      result.isControllerAs = fragments.length === 3 && (fragments[1] || '').toLowerCase() === 'as';
      if (result.isControllerAs) {
        result.controllerName = fragments[0];
        result.propName = fragments[2];
      } else {
        result.controllerName = ctrlName;
      }

      return result;
    }


  }
})();
