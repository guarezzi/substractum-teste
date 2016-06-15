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
    
    function config($httpProvider, $locationProvider){
   	    $locationProvider.html5Mode(true);
        // disable authentication server alert
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }
    
    angular.module('app', externalModules);
    
});