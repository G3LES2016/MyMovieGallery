'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function($scope, Movie, sharedProperties) {
    $scope.movies = Movie.getList().$object;
    $scope.selectedCategory = sharedProperties.getString();
    $scope.categories = sharedProperties.getCategories();
    $scope.setString = function(newValue) {
      sharedProperties.setString(newValue);
    };
  });
