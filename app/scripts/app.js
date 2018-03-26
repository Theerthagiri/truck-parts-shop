'use strict';

/**
 * trucksPartsShop
 * Main module of the application.
 */

angular
  .module('trucksPartsShop', [
    'ngRoute', 'ui.grid', 'ui.grid.pagination'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partsListPage.html',
        controller: 'partsListController'
      })
      .when('/update/', {
        templateUrl: 'views/partsUpdatePage.html',
        controller: 'UpdatePartsController'
      })
      .when('/update/:id', {
        templateUrl: 'views/partsUpdatePage.html',
        controller: 'UpdatePartsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
);