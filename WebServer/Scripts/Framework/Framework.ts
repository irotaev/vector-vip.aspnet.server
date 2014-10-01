/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/angularjs/angular.d.ts" />

/// <amd-dependency path="jquery"/>
/// <amd-dependency path="angular"/>

$ = require('jquery');
angular = require('angular');

export interface IAbstractControl
{
}

export class AbstractControl implements IAbstractControl
{
  constructor(public _controlName: string, public _angularModule: ng.IModule, private _parentLayout: JQuery)
  {    
    this.GetHtmlView(_controlName + '.html').then((content: string) =>
    {
      var $content = $(content).appendTo(_parentLayout);           

      angular.bootstrap($content[0], ['mainLayout']);
    });
  }

  /**
   * Получить Html контент вьюшки для данного контрола
   * @param viewName Имя вьюшки
   */
  public GetHtmlView(viewName: string): JQueryDeferred<string>
  {
    if (!viewName)
      throw new Error('Не задано имя вьюшки');

    var defferer = $.Deferred<string>();

    $.ajax({
      url: '/Content/Controls/' + this._controlName + '/Html/' + viewName,
      type: 'GET'
    }).done((viewContent: string) =>
    {
      defferer.resolve(viewContent);
    }).fail((error) =>
    {
      defferer.fail();
    });

    return defferer;
  }
} 