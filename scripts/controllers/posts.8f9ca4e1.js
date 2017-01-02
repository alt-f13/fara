'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('PostsCtrl', function ($scope, couchdb) {
      var $db = $scope.$db = couchdb;
      $scope.hits=new Array();
      $scope.docUrl="/db/"+$scope.$db.db.getName();

      $scope.indexVM.pageSize=50;
      $scope.$watch($scope.indexVM.page, function(newVal, oldVal, scope) {

        console.log($scope.indexVM);

        $scope.hits.apply($scope.indexVM.results.hits.hits);
      },true);
      $scope.nextPage = function() {
        $scope.indexVM.page=$scope.indexVM.page + 1;
        $scope.hits=$scope.hits.concat($scope.indexVM.results.hits.hits);
        console.log($scope.hits.length);
        $scope.$apply();

      }
  });
