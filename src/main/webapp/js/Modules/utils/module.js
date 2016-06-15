define(['angular',
        'providers'], function(angular, providers){
    'use strict';
    
    var app = angular.module('utils', []);
        app.config(providers(app));
});