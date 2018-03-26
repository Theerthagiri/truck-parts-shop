'use strict';

/**
 * # uiRequired
 * directives of the trucksPartsShop
 */

(function () {
    var UCHPApp = angular.module('trucksPartsShop');
    UCHPApp.directive('select', function () {
        return {
            restrict: 'E',
            require: '?ngModel',
            link: function (scope, element, attr, ngModelCtrl) {
                if (ngModelCtrl && attr.multiple) {
                    ngModelCtrl.$isEmpty = function (value) {
                        return !value || value.length === 0;
                    };
                }
            }
        };
    });
})();