'use strict';

describe('Service: countryListService', function () {

  // load the service's module
  beforeEach(module('trucksPartsShop'));

  // instantiate service
  var countryListService;
  beforeEach(inject(function (_countryListService_) {
    countryListService = _countryListService_;
  }));

  it('should do something', function () {
    expect(!!countryListService).toBe(true);
  });

});
