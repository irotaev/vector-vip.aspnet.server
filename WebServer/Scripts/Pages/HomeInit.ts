/// <reference path="../typings/jquery/jquery.d.ts" />

/// <amd-dependency path="jquery"/>
$ = require('jquery');
var angular = require(['angular']);

import MainLayout = require('../../Content/Controls/MainLayout/JavaScript/MainLayout');

export module HomeInit
{
  $(function () 
  {
    new MainLayout.MainLayout($('body')).GetHtmlView('MainLayout.html');
  });
}
