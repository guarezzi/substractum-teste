define(['angular'], function (angular) {
    'use strict';

    angular.module('authenticationModule')
        .constant('baseUrl', '/substract')
        .factory('AuthenticationService', AuthenticationService);
    
    AuthenticationService.$inject = ['$http', '$location', '$rootScope', '$window', 'baseUrl'];
    function AuthenticationService($http, $location, $rootScope, $window, baseUrl) {

        function authenticate(credentials) {
            var headers = {};

            if (credentials)
                headers = { authorization: "Basic " + btoa(credentials.username + ":" + credentials.password) }

            $http.get(baseUrl + '/user/current-user', { headers: headers }).then(
                function (response) {
                    if (response.status == 200) {
                        $rootScope.authenticated = true;
//                        user location do angular
//                         $window.location.href = '/cadastro-usuario';
                    } else {
                        $rootScope.authenticated = false;
                    }
                }, function () {
                    $rootScope.authenticated = false;
                }
            );

        }

        function getCurrentUser() {
            return $http.get(baseUrl + '/user/current-user');
        }

        function logout() {
            $http.get(baseUrl + 'logout', {}).finally(function () {
                $rootScope.authenticated = false;
                $window.location.href = baseUrl + '/';
            });
        }

        return {
            authenticate: authenticate,
            logout: logout,
            getCurrentUser: getCurrentUser
        }
    }

});