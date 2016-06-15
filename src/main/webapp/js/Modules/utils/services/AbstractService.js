define(['angular', 'BdFactoryService'], function(angular){
    'use strict';
    
    angular.module('utils').service('AbstractService', AbstractService);
    
    function AbstractService(BdFactoryService){
        
       return function(moduleName) {
            
            var moduleName = moduleName;
            
            function verifyModuleName() {
                if(!moduleName) {
                    console.error('Nome do módulo não definido');
                    return false;
                }
                return true;
            }
            
            function executeSave(object) {
                if(verifyModuleName())
                    return BdFactoryService.executePromise('save', moduleName, object);
            }
            
            function executeDelete(object) {
                if(verifyModuleName())
                    return BdFactoryService.executePromise('delete', moduleName, object);
            }
            
            function executeGetList() {
                if(verifyModuleName())
                    return BdFactoryService.executePromise('list', moduleName);
            }
            
            function executeGetById(id) {
                if(verifyModuleName())
                    return BdFactoryService.executePromise('get', moduleName, id);
            }
            
            function creatNewPromise(method, params) {
                if(verifyModuleName())
                    return BdFactoryService.executePromise(method, moduleName, params);
            }
            
            return {
                executeSave: executeSave,
                executeDelete: executeDelete,
                executeGetList: executeGetList,
                executeGetById: executeGetById,
                newPromise: creatNewPromise
            }
        }
        
	}
});