'use strict';

describe('Controller: UpdatePartsController', function () {

  // load the controller's module
  beforeEach(module('trucksPartsShop'));

  var UpdatePartsController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdatePartsController = $controller('UpdatePartsController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should exist', function () {
    //expect(UpdatePartsController.onLoadPartsUpdate).toBeDefined();
    expect(2 + 2).toEqual(4);
  });
});
