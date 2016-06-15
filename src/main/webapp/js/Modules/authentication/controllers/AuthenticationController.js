define(['angular'], function(angular){
	'use strict';
	
	angular.module('authenticationModule')
		.controller('AuthenticationController', AuthenticationController);
	
	function AuthenticationController(AuthenticationService){
	
        var vm = this;
            
        vm.msg = "";

        vm.credentials = {
            username: undefined,
            password: undefined
        }

        function login() {
            AuthenticationService.authenticate(vm.credentials);
        }
        
        vm.login = login;
        
	}
	
});