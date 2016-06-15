define(['angular'], function(angular){
    'use strict';
    
   angular.module('utils').factory('BdFactoryService', BdFactoryService);
    
    function BdFactoryService($q, $http) {
    	
    	function configureConnection(method, url, params) {
			return {
				method: 'POST',
				url: location.origin + "/" + url + "/" + method,
				headers: {
					'content-type': "application/json"
				},
				data: params
			}
		}
    	
    	function executePromise(method, url, params) {
			var deferred = $q.defer(),
				promise = deferred.promise;
			
			promise = $http(configureConnection(method, url, params));
			return promise;
		}

        return {
    			executePromise: executePromise
    	};
    }
    BdFactoryService.$inject = ['$q', '$http'];
    
});