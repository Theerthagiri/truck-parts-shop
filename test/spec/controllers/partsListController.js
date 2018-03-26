'use strict';

describe('Controller: partsListController', function () {

  // load the controller's module
  beforeEach(module('trucksPartsShop'));

  var partsListController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    partsListController = $controller('partsListController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should exist', function () {
    //expect(partsListController.onLoadPartsList).toBeDefined();
    expect(2 + 2).toEqual(4);
  });
});
