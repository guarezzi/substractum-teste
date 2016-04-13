angular.module('autenticateModule', ['routers'])
	
    .controller('AutenticateController', AutenticateController)
    
    AutenticateController.$inject = ['$scope', 'appName'];
    function AutenticateController($scope, appName) {
        'use strict';

        $scope.usuario = null;
        $scope.senha = null;
        $scope.getContext = getContext;
        $scope.fnAutenticate = fnAutenticate;
        
        function getContext() {
        	return appName;
        }
        
        function fnAutenticate() {
            if($scope.usuario){
                sessionStorage.setItem('username', $scope.usuario);
                location.href = "/home.html";
            }
        };

    };
