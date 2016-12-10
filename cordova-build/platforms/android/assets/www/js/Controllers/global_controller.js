(function(){
  angular
    .module('App.controllers')

    /**
     * @class App.controllers.globalController
     */
    .controller('globalController', globalController);

  globalController.$inject = ['$scope', '$state', 'localization'];

  function globalController($scope, $state, localization) {
    $scope.DICTIONARY = localization.getDictionary('en');
    $scope.changeState = changeState;

    /**
     * changeState changes the active view using the angular $state object
     */
    function changeState(state) {
      $state.go(state);
    }
  }
})();
