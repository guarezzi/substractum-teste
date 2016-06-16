define(['angular'], function (angular) {
    'use strict';

    angular.module('usersModule')
        .factory('UsersCrudService', UsersCrudService);
    
    UsersCrudService.$inject = ['$http', 'baseUrl', 'AbstractService'];
    function UsersCrudService($http, baseUrl, AbstractService) {

        var service = AbstractService( baseUrl.replace('/', '') + '/user' );
        
        return {
            getAllUsers: service.executeGetList,
            saveUser: service.executeSave,
            deleteUser: service.executeDelete
        }
    }

});