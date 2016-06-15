define(['angular',
        'Modules/authentication/services/AuthenticationService'], function(angular){
    
    angular.module('authenticationModule')
            .directive('authenticationForms', authenticationForms);
    
    
    function authenticationForms() {
        function AuthenticationController(AuthenticationService){
            var vm = this;
            
            vm.msg = "";
            
            vm.credentials = {
                username: '',
                password: ''
            }
            
            vm.login = login;
            
            function login() {
                AuthenticationService.authenticate(vm.credentials);
            }
        }
        return {
            restrict: 'A',
            controller: AuthenticationController,
            controllerAs: 'ctrl',
            templateUrl: '/js/Modules/authentication/views/authentication-form.html'
        }
    }
    
});