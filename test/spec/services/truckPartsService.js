'use strict';

describe('Service: truckPartsService', function () {

  // load the service's module
  beforeEach(module('trucksPartsShop'));

  // instantiate service
  var truckPartsService;
  beforeEach(inject(function (_truckPartsService_) {
    truckPartsService = _truckPartsService_;
  }));

  it('should do something', function () {
    expect(!!truckPartsService).toBe(true);
  });

});
