/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/requirejs/require.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

/// <amd-dependency path="jquery"/>
/// <amd-dependency path="angular"/>

$ = require('jquery');
angular = require('angular');
import Framework = require('../../../../Scripts/Framework/Framework');

/**
 * Контрол главного шаблона страницы
 */
export class MainLayout extends Framework.AbstractControl
{
  constructor(private _parentLayout: JQuery)
  {
    super('MainLayout', angular.module('mainLayout'));

    this._angularModule.controller('mainLayoutController', () => { this.mainLayoutController(); });
  }  

  //#region Angular controllers
  /**
  * Верхний контроллер для данного можуля
  */
  private mainLayoutController(): void
  {
    console.log();
    console.log(this);
  }
  //#endregion
}