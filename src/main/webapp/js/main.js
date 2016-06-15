require.config({
    paths:{
        // libs   
        'jquery': '../lib/js/jquery-1.11.3.min',
        'bootstrap': '../lib/js/bootstrap.min',
        'angular': '../lib/js/angular',
        'ngRoute': '../lib/js/angular-route.min',

        // modules
        'providers': 'providers',
        'utils': 'Modules/utils/module',
        'BdFactoryService': 'js/Modules/utils/services/BdFactoryService',
        'AbstractService': 'js/Modules/utils/services/AbstractService',
        'authentication': 'Modules/authentication/module', 
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