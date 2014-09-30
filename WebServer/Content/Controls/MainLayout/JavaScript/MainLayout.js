/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/requirejs/require.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../../../../Scripts/Framework/Framework', "jquery", "angular"], function(require, exports, Framework) {
    /// <amd-dependency path="jquery"/>
    /// <amd-dependency path="angular"/>
    $ = require('jquery');
    angular = require('angular');

    /**
    * Контрол главного шаблона страницы
    */
    var MainLayout = (function (_super) {
        __extends(MainLayout, _super);
        function MainLayout(_parentLayout) {
            var _this = this;
            _super.call(this, 'MainLayout', angular.module('mainLayout'));
            this._parentLayout = _parentLayout;

            this._angularModule.controller('mainLayoutController', function (a) {
                _this.mainLayoutController(a);
            });
        }
        //#region Angular controllers
        /**
        * Верхний контроллер для данного можуля
        */
        MainLayout.prototype.mainLayoutController = function (a) {
            console.log(this);
            console.log(a);
        };
        return MainLayout;
    })(Framework.AbstractControl);
    exports.MainLayout = MainLayout;
});
//# sourceMappingURL=MainLayout.js.map
