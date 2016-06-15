define(['angular'],
      function(angular){
    'use strict';
    
    function CepService($http, $q) {
        
        function searchCepInformation(cep) {
            var url = 'http://viacep.com.br/ws/value/json/',
                deferred = $q.defer(),
				promise = deferred.promise;
			promise = $http.get(url.replace('value', cep));
			return promise;
        }
        
        return {
            searchCepInformation: searchCepInformation
        }
    }
    
    angular.module('utils').factory('CepService', CepService);
});