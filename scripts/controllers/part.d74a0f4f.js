'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:PartCtrl
 * @description
 * # PartCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('PartCtrl', function ($scope,  couchdb, $routeParams) {
    var $db = $scope.$db = couchdb;
    $scope.loadPart = function() {
      $db.doc.get($routeParams.id, function(data) {
        $scope.part=data;
        console.log(data);
      });
  
    };
    $scope.loadPart();
  });
