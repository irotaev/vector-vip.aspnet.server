/// <reference path="../typings/jquery/jquery.d.ts" />

/// <amd-dependency path="jquery"/>

$ = require('jquery');

export interface IAbstractControl
{
}

export class AbstractControl implements IAbstractControl
{
  constructor(public _controlName: string)
  {
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
      url: '/Content/Controls/' + this._controlName + 'Html/' + viewName,
      type: 'GET'
    }).done((viewContent: string) =>
    {
      console.log(viewContent);

      defferer.resolve(viewContent);
    }).fail((error) =>
    {
      console.log(error);

      defferer.fail();
    });

    return defferer;
  }
} 