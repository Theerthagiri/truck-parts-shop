'use strict';

/**
 * # textbox
 * directive of the trucksPartsShop
 */

(function () {
    var UCHPApp = angular.module('trucksPartsShop');
    UCHPApp.directive('textbox', function () {
        var textbox = {};
        textbox.replace = false;
        textbox.restrict = 'E';
        textbox.templateUrl = './view/textbox.html';
        textbox.scope = {
            id: '@id',
            placeholder: '@placeholder',
            containerClass: '@containerClass',
            textboxClass: '@textboxClass',
            textboxValue: '=textboxValue',
            isRequired: '@isRequired',
            labelClass: '@labelClass',
            autoFocusEnabled: '@autoFocusEnabled'
        };
        textbox.link = function () {
            //$scope, element, attributes
        };
        return textbox;
    });
})();