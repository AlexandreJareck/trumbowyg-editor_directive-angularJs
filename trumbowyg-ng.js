angular.module('trumbowyg-ng', []);
angular.module('trumbowyg-ng').directive('trumbowygNg',
    function() {
        'use strict';
        return {
            transclude: true,
            restrict: 'EA',
            require: '?ngModel',
            // scope: {
            //     ngRequired: "=ngRequired"
            // },
            link: function(scope, element, attrs, ngModelCtrl) {
                var options = angular.extend({
                    fullscreenable: true,
                    semantic: true,
                    closable: true,
                    lang: 'pt_br',
                    btns: [
                        ['viewHTML'],
                        ['undo', 'redo'],
                        ['formatting'],
                        ['strong', 'em', 'del'],
                        ['superscript', 'subscript'],
                        ['link'],
                        ['insertImage'],
                        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                        ['unorderedList', 'orderedList'],
                        ['horizontalRule'],
                        ['removeformat'],
                        ['fullscreen'],
                        ['table']
                    ],
                    svgPath: 'trumbowyg/icons.svg'
                });
                ngModelCtrl.$render = function() {
                    angular.element(element).trumbowyg('html', ngModelCtrl.$viewValue);
                };
                angular.element(element).trumbowyg(options).on('tbwchange', function() {
                    ngModelCtrl.$setViewValue(angular.element(element).trumbowyg('html'));
                }).on('tbwpaste', function() {
                    ngModelCtrl.$setViewValue(angular.element(element).trumbowyg('html'));
                });

                // scope.$parent.$watch(attrs.ngDisabled, function(newVal) {
                //     debugger;
                //     angular.element(element).trumbowyg(newVal ? 'disable' : 'enable');
                // });
            }
        };
    });