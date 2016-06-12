'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieEditCtrl
 * @description
 * # MovieEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('MovieEditCtrl', function (
  $scope,
  $routeParams,
  Movie,
  $location,
  sharedProperties
) {
  $scope.editMovie = true;
  $scope.movie = {};
  $scope.categories = sharedProperties.getCategories();
  Movie.one($routeParams.id).get().then(function(movie) {
    $scope.movie = movie;
    //console.log($scope.movie);
    $scope.saveMovie = function() {
      $scope.movie.save().then(function() {
        $location.path('/movie/' + $routeParams.id);
      });
    };
  });
});
