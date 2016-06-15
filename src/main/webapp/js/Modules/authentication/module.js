define(['angular',
        'providers',
        'ngRoute'], 
       function(angular, providers, ngRoute){
    'use strict';
    
    var app = angular.module('authenticationModule', ['utils', 'ngRoute']);
        app.config(config)
        app.config(providers(app));
    
    function config($httpProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        // disable authentication server alert
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }
    
});