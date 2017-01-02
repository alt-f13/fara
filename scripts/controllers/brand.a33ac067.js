'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:BrandCtrl
 * @description
 * # BrandCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('BrandCtrl', function ($scope,  couchdb, $routeParams) {
    var $db = $scope.$db = couchdb;
    $scope.docUrl=$scope.$db.config.getServer()+"/"+$scope.$db.db.getName()+"/"+$routeParams.id+"/";

    $scope.loadBrand = function() {
      $scope.$db.view('db', 'parts', {key: $routeParams.id, limit: 30}, function(data) {
        $scope.list=data;
        console.log(data);
      });

    };
    $scope.loadBrand();
  });
