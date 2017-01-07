'use strict';

/**
 * @ngdoc filter
 * @name angularTestApp.filter:chips
 * @function
 * @description
 * # chips
 * Filter in the angularTestApp.
 */
angular.module('angularTestApp')
  .filter('chips', ['$sce', function ($sce) {
    return function (input) {
      return $sce.trustAsHtml(input.map(function(foo) {
        return '<md-chip>'+foo+'</md-chip>';
      }).join(''));
    };
  }]);
