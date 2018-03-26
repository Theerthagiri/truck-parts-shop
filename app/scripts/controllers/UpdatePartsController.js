'use strict';

/**
 * # UpdatePartsController
 * Controller of the trucksPartsShop
 */

(function () {
    var UCHPApp = angular.module('trucksPartsShop');
    var UpdatePartsController = function ($scope, $location, $routeParams, countryListService, truckPartsService) {

            $scope.onLoadPartsUpdate = function () {
                $scope.isEdit = false;
                $scope.truckPartsList = truckPartsService.getTruckParts();
                $scope.countries = countryListService.getCountryList();
                $scope.getTruckPartsList();
            };

            $scope.goBack = function () {
                $scope.isEdit = false;
                $location.path('/');
            };

            $scope.updateTruckParts = function (data) {
                if (!data) {
                    return false;
                }
                if (!$scope.isEdit) {
                    $scope.truckPartsList.push(data);
                } else {
                    var id = $routeParams.id - 1;
                    $scope.truckPartsList[id] = data;
                }
                $location.path('/');
            };

            $scope.getTruckPartsList = function () {
                var list = $scope.truckPartsList[$routeParams.id - 1];
                if (!!list) {
                    $scope.truckParts = list;
                    $scope.isEdit = true;
                }
            };

            $scope.$watch(function () {
                return $scope.truckPartsList;
            }, function (oldVal, newVal) {
                if (oldVal !== newVal) {
                    truckPartsService.updateTruckParts($scope.truckPartsList);
                }
            }, true);
        };
    UCHPApp.controller('UpdatePartsController', ['$scope', '$location', '$routeParams', 'countryListService', 'truckPartsService', UpdatePartsController]);
})();