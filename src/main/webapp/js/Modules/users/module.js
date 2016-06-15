define(['angular',
        'providers'], 
       function(angular, providers){
    'use strict';
    
    var app = angular.module('usersModule', ['utils']);
        app.config(providers(app));
    
});