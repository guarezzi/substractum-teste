define(
		[ 'angular', 
          'app'],
		function(angular) {
			'use strict';
            
            routes.$inject = ['$routeProvider', '$locationProvider', 'baseUrl']
            function routes($routeProvider, $locationProvider, baseUrl) {
                
                function loader(dependencies) {
                    return function($q) {
                        var deferred = $q.defer();
                        require(dependencies, function() {
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }

                $locationProvider.html5Mode(true);

                $routeProvider
                        .when('/', {
                            redirectTo : '/login'
                        })
                        .when('/cadastro-usuario', {
                            templateUrl : baseUrl + '/js/Modules/authentication/views/new-user-form.html',
                            controller: 'AuthenticatedController',
                            controllerAs: 'ctrl',
                            resolve : {
                                myCtrl : loader([baseUrl + '/js/Modules/authentication/services/AuthenticationService.js',
                                                 baseUrl + '/js/Modules/authentication/controllers/AuthenticatedController.js' ])
                            }
                        })
                        .when('/login', {
                            templateUrl : baseUrl + '/js/Modules/authentication/views/authentication-form.html',
                            controller: 'AuthenticationController',
                            controllerAs: 'ctrl',
                            resolve : {
                                myCtrl : loader([ baseUrl + '/js/Modules/authentication/services/AuthenticationService.js',
                                                  baseUrl + '/js/Modules/authentication/controllers/AuthenticationController.js' ])
                            }
                        })
                        .otherwise({
                            redirectTo : '/login'
                        });
            }

            angular.module('app')
                .constant('baseUrl', '/substractum')
                .config(routes);

		});