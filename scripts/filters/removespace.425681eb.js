'use strict';

/**
 * @ngdoc filter
 * @name angularTestApp.filter:removeSpace
 * @function
 * @description
 * # removeSpace
 * Filter in the angularTestApp.
 */
angular.module('angularTestApp')
.filter('removeSpace', [function() {
    return function(string) {
        if (!angular.isString(string)) {
            return string;
        }
        return string.replace(/[\s]/g, '_');
    };
}])
