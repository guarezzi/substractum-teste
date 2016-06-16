require.config({
    paths:{
        // libs   
//        'jquery': '../lib/js/jquery-1.11.3.min',
//        'bootstrap': '../lib/js/bootstrap.min',
//        'angular': '../lib/js/angular',
//        'ngRoute': '../lib/js/angular-route.min',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min',
        'angular': '../node_modules/angular/angular.min',
        'ngRoute': '../node_modules/angular-route/angular-route.min',

        // modules
        'providers': 'providers',
        'utils': 'Modules/utils/module',
        
        'authentication': 'Modules/authentication/module', 
        'users': 'Modules/users/module',
        'app': 'app'
    },
    shim:{
        'jquery': {
            exports: 'jquery'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angular': {
            deps: ['bootstrap'],
            exports: 'angular'
        },
        'ngRoute': {
            deps: ['angular']
        }
    }
});

require(['app',
         'routers'],
  function() {
    'use strict';
    
    angular.element(document).ready(function(){
        angular.bootstrap(document, ['app']);
    });
    
  }
);