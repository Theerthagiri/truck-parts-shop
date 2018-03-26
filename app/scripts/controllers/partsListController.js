'use strict';

/**
 * # partsListController
 * Controller of the trucksPartsShop
 */
(function () {
	var UCHPApp = angular.module('trucksPartsShop');
	var partsListController = function ($scope, $location, truckPartsService) {
		$scope.onLoadPartsList = function () {
			$scope.pageTitle = 'Truck Parts List';
			$scope.noRecord = 'No records available';
			$scope.truckPartsList = truckPartsService.getTruckParts();
		};

		$scope.gridOptions = {
			data: 'truckPartsList',
			paginationPageSizes: [5, 10, 25],
			paginationPageSize: 1,
			columnDefs: [
				{ name: 'partsName' },
				{ name: 'emailId' },
				{ name: 'description' },
				{ name: 'country.name' }
			]
		};

		$scope.deletTruckParts = function (id) {
			$scope.truckPartsList.splice($scope.truckPartsList.indexOf($scope.truckPartsList[id - 1]), 1);
			$location.path('/');
		};
		
		$scope.$watch(function () {
			return $scope.truckPartsList;
		}, function (oldVal, newVal) {
			if (oldVal !== newVal) {
				truckPartsService.updateTruckParts($scope.truckPartsList);
			}
		}, true);
	};
	UCHPApp.controller('partsListController', ['$scope', '$location', 'truckPartsService', partsListController]);
})();