/// <reference path="../../../../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../../scripts/typings/requirejs/require.d.ts" />

/// <amd-dependency path="jquery"/>

$ = require('jquery');
import Framework = require('../../../../Scripts/Framework/Framework');

/**
 * Контрол главного шаблона страницы
 */
export class MainLayout extends Framework.AbstractControl
{
  constructor(private _parentLayout: JQuery)
  {
    super('MainLayout');
  }  
}