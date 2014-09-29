/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/requirejs/require.d.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", '../../../../Scripts/Framework/Framework', "jquery"], function(require, exports, Framework) {
    /// <amd-dependency path="jquery"/>
    $ = require('jquery');

    /**
    * Контрол главного шаблона страницы
    */
    var MainLayout = (function (_super) {
        __extends(MainLayout, _super);
        function MainLayout(_parentLayout) {
            _super.call(this, 'MainLayout');
            this._parentLayout = _parentLayout;
        }
        return MainLayout;
    })(Framework.AbstractControl);
    exports.MainLayout = MainLayout;
});
//# sourceMappingURL=MainLayout.js.map
