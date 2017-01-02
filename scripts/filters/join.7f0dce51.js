'use strict';

/**
 * @ngdoc filter
 * @name angularTestApp.filter:join
 * @function
 * @description
 * # join
 * Filter in the angularTestApp.
 */
angular.module('angularTestApp')
  .filter('join', function () {
    return function (input) {
      return input.join(' ');
    };
  });
