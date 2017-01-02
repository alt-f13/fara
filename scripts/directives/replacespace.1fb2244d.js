'use strict';

/**
 * @ngdoc directive
 * @name angularTestApp.directive:replaceSpace
 * @description
 * # replaceSpace
 */
angular.module('angularTestApp')
  .directive('replaceSpace', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the replaceSpace directive');
      }
    };
  });
