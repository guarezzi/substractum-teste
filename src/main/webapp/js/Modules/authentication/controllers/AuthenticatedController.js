define(['angular'], function(angular){
	'use strict';
	
	angular.module('authenticationModule')
		.controller('AuthenticatedController', AuthenticatedController);
	
	function AuthenticatedController(AuthenticationService){
		
		var vm = this;
		
		function logout(){
			AuthenticationService.logout();
		};
		
		function getCurrentUser(){
			AuthenticationService.getCurrentUser().then(
					function(response){
						if(response.status == 200)
							vm.user = response.data;
					});
		}
		
		vm.logout = logout;
		getCurrentUser();
	
	}
	
});