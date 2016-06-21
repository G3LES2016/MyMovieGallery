'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var app = angular
  .module('clientApp', ['ngResource', 'ngRoute', 'restangular'])
  .config(function($routeProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function(MovieRestangular) {
    return MovieRestangular.service('movie');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });
app.service('sharedProperties', function() {
  var stringValue = 'All';
  var categories = [
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
    "Para Dançar",
    "Sessão da tarde",
    "Super Heróis",
    "Vampiros",
    "Zombies"
  ];
  var categoryList = [
    {name:"All", imageURL:""},
    {name:"80s", imageURL:""},
    {name:"90s", imageURL:""},
    {name:"Ação", imageURL:""},
    {name:"Animação", imageURL:""},
    {name:"Bruxas, feitiços e afins", imageURL:""},
    {name:"Chuck Norris", imageURL:""},
    {name:"Dinossauros", imageURL:""},
    {name:"Era Medieval", imageURL:""},
    {name:"Filmes Com animais", imageURL:""},
    {name:"Monstros", imageURL:"images/720pTheater.png"},
    {name:"Musical", imageURL:"images/720pTheater.png"},
    {name:"Natal", imageURL:"images/720pTheater.png"},
    {name:"Nerd", imageURL:"images/720pTheater.png"},
    {name:"Para Dançar", imageURL:""},
    {name:"Sessão da tarde", imageURL:""},
    {name:"Super Heróis", imageURL:""},
    {name:"Vampiros", imageURL:""},
    {name:"Zombies", imageURL:""}
    ];
  return {
    getString: function() {
      return stringValue;
    },
    setString: function(value) {
    //  console.log(value);
    //  console.log(stringValue);
      stringValue = value;
      console.log(stringValue);
    },
    getCategories : function(){
      return categories;
    },
    resetCategory: function(){
      stringValue = 'All';
      return stringValue;
    },
    getCategoryList: function(){
      return categoryList;
    }
  }
});
