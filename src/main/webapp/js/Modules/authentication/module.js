define(['angular',
        'providers',
        'users',
        'ngRoute'], 
       function(angular, providers, ngRoute){
    'use strict';
    
    var app = angular.module('authenticationModule', ['utils', 'ngRoute', 'usersModule']);
        app.config(config);
        app.config(providers(app));
        app.run(checkLogin);
        
    function checkLogin($rootScope, $location) {
        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
          if ( !$rootScope.authenticated && next.originalPath != "/login") {
              $location.path( "/login" ); 
          }
        });
     }
    
    function config($httpProvider, $locationProvider) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        // disable authentication server alert
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    }
    
});