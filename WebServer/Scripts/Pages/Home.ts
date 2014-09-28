/// <reference path="../typings/requirejs/require.d.ts" />

import requireJSinitModule = require('../Framework/requireJsInit');
var angular = require(['angular']);

requireJSinitModule.RequireJsConfig.Init();

console.log(angular);
