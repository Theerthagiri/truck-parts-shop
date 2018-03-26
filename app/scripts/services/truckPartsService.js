'use strict';

/**
 * truckPartsService
 * Factory in the trucksPartsShop.
 */

(function () {
  var UCHPApp = angular.module('trucksPartsShop');
  UCHPApp.factory('truckPartsService', function () {

    var TRUCK_PARTS_LIST = 'TRUCK-PARTS-LIST';

    // Return public method
    return {
      getTruckParts: function () {
        return JSON.parse(localStorage.getItem(TRUCK_PARTS_LIST) || '[]');
      },
      updateTruckParts: function (data) {
        return localStorage.setItem(TRUCK_PARTS_LIST, JSON.stringify(data));
      }
    };
  });
})();