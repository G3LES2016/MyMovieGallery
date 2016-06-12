'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function($scope, sharedProperties) {
    $scope.selectedCategory = sharedProperties.resetCategory();
    $scope.categories = sharedProperties.getCategories();
    $scope.setString = function(newValue) {
       sharedProperties.setString(newValue);
   };
  });
