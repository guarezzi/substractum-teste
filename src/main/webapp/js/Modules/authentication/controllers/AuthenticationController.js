define(['angular'], function(angular){
	'use strict';
	
	angular.module('authenticationModule')
		.controller('AuthenticationController', AuthenticationController);
	
    AuthenticationController.$inject = ['AuthenticationService', 'UsersCrudService'];
	function AuthenticationController(AuthenticationService, UsersCrudService){
	
        var vm = this;
            
        vm.loginMsg = {
            type: '',
            text: ''
        };
        
        vm.registerMsg = {
            type: '',
            text: ''
        };

        vm.credentials = {
            username: undefined,
            password: undefined
        }
        
        function eraserNewUser(){
            vm.newUser = {
                username: undefined,
                password: undefined,
                email: undefined
            }
        }
        eraserNewUser();

        function login() {
            // TODO: melhorar o retorno no caso de um 401
            AuthenticationService.authenticate(vm.credentials);
        }
        
        function setRegisterErrorMsg(){
            vm.registerMsg.type = 'danger';
            vm.registerMsg.text = 'Algo deu errado no seu cadastro. Tente outro usuário.';
        }
        
        function register() {
            UsersCrudService.saveUser(vm.newUser).then(
                function(response){
                    if(response.status == 200) {
                        vm.registerMsg.type = 'success';
                        vm.registerMsg.text = 'Seu cadastrado foi efetuado com sucesso!';
                        eraserNewUser()
                    } else {
                        setRegisterErrorMsg();
                    }
                },
                function(response) {
                    setRegisterErrorMsg();
                }
            );
        }
        
        vm.login = login;
        vm.register = register;
        
	}
	
});