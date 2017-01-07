'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */

var $app = angular
  .module('angularTestApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    //'ngTouch',
    'SimpleCouch',
    'ui.bootstrap',
    'ngMaterial',
    'elasticui',
    'elasticsearch',
    'siyfion.sfTypeahead',
    'hl.sticky',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider,$httpProvider,couchConfigProvider) {
    $routeProvider
      .when('/brand/:id', {
        templateUrl: 'views/brand.html',
        controller: 'BrandCtrl',
        controllerAs: 'brand'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/part/:id', {
        templateUrl: 'views/part.html',
        controller: 'PartCtrl',
        controllerAs: 'part'
      })
      .otherwise({
        redirectTo: '/posts'
      });
      if(location.hostname === 'localhost') {
        couchConfigProvider.setServer("/db");
      }else {
        couchConfigProvider.setServer("https://couch.2d-it.ru");
      }
    couchConfigProvider.setDB('fara');
    //$httpProvider.defaults.withCredentials = true;

    //couchConfigProvider.setMethod('method GET/JSONP');


  })
  .constant('euiHost', 'http://elastic.2d-it.ru'); // ACTION: change to cluster addres

  //.constant('euiHost', 'http://localhost:9200'); // ACTION: change to cluster addres
