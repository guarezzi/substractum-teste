define([
    'angular',
    'ngRoute',

    'utils',
    'authentication',
    'users'
],
  function(angular, ngRoute){
      'use strict';
    
    var externalModules = [
        'ngRoute',
        'utils',
        'authenticationModule',
        'usersModule'
    ];
    
    angular.module('app', externalModules);
    
});