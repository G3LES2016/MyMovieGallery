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
    $scope.categories = sharedProperties.getCategoryList();
    $scope.categoryTheme = $scope.categories.filter(function(v) {
        return v.name === sharedProperties.getString();
      })[0].imageURL; // Filtra a a lista de categorias, pega apenas a categoria selecionada, e retorna a URL

    console.log($scope.categoryTheme);
    $scope.applyFilter = function(category) {
      $scope.categoryTheme = category.imageURL;
      console.log(category.imageURL);
      $scope.selectedCategory = category.name;
      sharedProperties.setString(category.name);
    };
  });
