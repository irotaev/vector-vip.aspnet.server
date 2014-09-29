/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/requirejs/require.d.ts" />
/// <reference path="../../content/controls/mainlayout/javascript/mainlayout.d.ts" />

import requireJSinitModule = require('../Framework/requireJsInit');
requireJSinitModule.RequireJsConfig.Init();

var angular = require(['angular']);

require(['jquery', '../../Content/Controls/MainLayout/JavaScript/MainLayout'], function($, aa)
{
  $(function () 
  {
    //new MainLayout.MainLayout($('body')).GetHtmlView('MainLayout');
  });
});
