angular.module('starter.controllers', [])



.controller('dogsCtrl', function($scope, $stateParams, StorageService) {
  var dogs = StorageService.getAll();

  $scope.dogs = dogs;

  $scope.specificDog = dogs[$stateParams.dogId];

})

.controller('dogCtrl', function($scope, $stateParams) {
});
