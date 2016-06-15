define([], function(){
    'use strict';
    
    function newProvider(app) {
        
        var app = app;
    
        function providers( $controllerProvider, $provide, $compileProvider ) {

            app._controller = app.controller;
            app._service = app.service;
            app._factory = app.factory;
            app._value = app.value;
            app._directive = app.directive;

            app.controller = function( name, constructor ) {
                $controllerProvider.register( name, constructor );
                return( this );
            };

            app.service = function( name, constructor ) {
                $provide.service( name, constructor );
                return( this );
            };

            app.factory = function( name, factory ) {
                $provide.factory( name, factory );
                return( this );
            };

            app.value = function( name, value ) {
                $provide.value( name, value );
                return( this );
            };

            app.directive = function( name, factory ) {
                $compileProvider.directive( name, factory );
                return( this );
            };

            // NOTE: You can do the same thing with the "filter"
            // and the "$filterProvider"; but, I don't really use
            // custom filters.
        };
        
        return providers;
    }
    
    return newProvider;
})