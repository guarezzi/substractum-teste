define(['angular'], function(angular){
	'use strict';
	
	angular.module('usersModule')
		.controller('UsersCrudController', UsersCrudController);
	
	function UsersCrudController(UsersCrudService, AuthenticationService){
		
		var vm = this;
        
        function initUser() {
            vm.user = {
                username: '',
                password: '',
                email: ''
            }
        }
        
        initUser();
		
        // Create and Update method
        function saveUser() {
            UsersCrudService.saveUser(vm.user).then(
                function(response){
                    if(response.status == 200) {
                        vm.msg = 'Usuário salvo com sucesso!';
                        getAllUsers();
                        initUser();
                    }
                }
            );
        }
        
        // Edit method
        function editUser(user) {
            vm.user = angular.copy(user);
        }
        
        // Delete method
        function deleteUser(user){
            UsersCrudService.deleteUser(user).then(
                function(response) {
                    if(response.status == 200) {
                        vm.msg = 'Usuário deletado com sucesso!';
                        getAllUsers();
                    }
                }
            );
        }
        
        // Read method
        function getAllUsers(){
            UsersCrudService.getAllUsers().then(
                function(response){
                    if(response.status == 200)
                        vm.users = response.data;
                }
            );
        }
        
        getAllUsers();
        
        function logout(){
            AuthenticationService.logout();
        }
        
		vm.saveUser = saveUser;
        vm.editUser = editUser;
        vm.deleteUser = deleteUser;
		vm.logout = logout;
	
	}
	
});