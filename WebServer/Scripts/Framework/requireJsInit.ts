/// <reference path="../typings/requirejs/require.d.ts" />

export class RequireJsConfig
{
  public static Init(): void
  {
    requirejs.config({
      baseUrl: '/',
      paths: {
        jquery: 'Scripts/jquery-2.1.1.min',
        angular: 'bower_components/angular/angular.min'
      },
      shim: {
         'angular': {
             exports: 'angular'
         }
     },
    });
  }
}

