/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/requirejs/require.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../../../../Scripts/Framework/Framework', "jquery", "angular", "angular_route"], function(require, exports, Framework) {
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="angular"/>
    /// <amd-dependency path="angular_route"/>
    $ = require('jquery');
    angular = require('angular');

    /**
    * Контрол главного шаблона страницы
    */
    var MainLayoutControl = (function (_super) {
        __extends(MainLayoutControl, _super);
        function MainLayoutControl(_parentLayout) {
            var _this = this;
            _super.call(this, 'MainLayout', angular.module('mainLayout', ['ngRoute']), _parentLayout);

            //#region Инийиализация контроллеров
            this._angularModule.controller('mainLayoutController', function ($scope) {
                _this.mainLayoutController($scope);
            });
            //#endregion
        }
        //#region Angular controllers
        /**
        * Верхний контроллер для данного можуля
        * @param $scope Angular scope
        */
        MainLayoutControl.prototype.mainLayoutController = function ($scope) {
        };
        return MainLayoutControl;
    })(Framework.AbstractControl);
    exports.MainLayoutControl = MainLayoutControl;
});
//# sourceMappingURL=MainLayout.js.map
