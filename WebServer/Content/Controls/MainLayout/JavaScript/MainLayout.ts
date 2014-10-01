/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/requirejs/require.d.ts" />
/// <reference path="../../../../scripts/typings/angularjs/angular.d.ts" />

/// <amd-dependency path="jquery"/>
/// <amd-dependency path="angular"/>
/// <amd-dependency path="angular_route"/>

$ = require('jquery');
angular = require('angular');
import Framework = require('../../../../Scripts/Framework/Framework');

/**
 * Контрол главного шаблона страницы
 */
export class MainLayoutControl extends Framework.AbstractControl
{
  constructor(_parentLayout: JQuery)
  {    
    super('MainLayout', angular.module('mainLayout', ['ngRoute']), _parentLayout);

    //#region Инийиализация контроллеров
    this._angularModule.controller('mainLayoutController', ($scope) => { this.mainLayoutController($scope); });
    //#endregion
  }  

  //#region Angular controllers
  /**
  * Верхний контроллер для данного можуля
  * @param $scope Angular scope
  */
  private mainLayoutController($scope: any): void
  {
  }
  //#endregion
}