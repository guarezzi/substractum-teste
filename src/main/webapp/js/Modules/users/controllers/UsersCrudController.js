define(['angular'], function(angular){
	'use strict';
	
	angular.module('usersModule')
		.controller('UsersCrudController', UsersCrudController);
	
	function UsersCrudController(UsersCrudService){
		
		var vm = this;
        vm.user = {
            username: '',
            password: '',
            email: ''
        }
		
        // Create and Update method
        function register() {
            UsersCrudService.register(vm.user).then(
                function(response){
                    if(response.status == 200)
                        vm.msg = 'Usuário salvo com sucesso!';
                }
            );
        }
        
        // Edite method
        function edite(user) {
            vm.user = angular.copy(user);
        }
        
        // Delete method
        function deleteUser(user){
            UsersCrudService.deleteUser(user).then(
                function(response) {
                    if(response.status == 200)
                        vm.msg = 'Usuário deletado com sucesso!';
                }
            );
        }
        
        // Read method
        function getAll(){
            UsersCrudService.getAll(user).then(
                function(response){
                    if(response.status == 200)
                        vm.users = response.data;
                }
            );
        }
        
		vm.register = register;
        vm.edite = edite;
        vm.deleteUser = deleteUser;
		getCurrentUser();
	
	}
	
});