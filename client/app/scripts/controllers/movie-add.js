'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('MovieAddCtrl', function ($scope, Movie, $location) {
  $scope.movie = {};
  $scope.categories = [
    "80s",
    "90s",
    "Ação",
    "Animação",
    "Bruxas, feitiços e afins",
    "Chuck Norris",
    "Dinossauros",
    "Era Medieval",
    "Filmes Com animais",
    "Monstros",
    "Musical",
    "Natal",
    "Nerd",
    "Para dançar",
    "Sessão da tarde",
    "Super heróis",
    "Vampiros",
    "Zombies"
  ];
  $scope.saveMovie = function() {
    Movie.post($scope.movie).then(function() {
      $location.path('/movies');
    });
  };
});
