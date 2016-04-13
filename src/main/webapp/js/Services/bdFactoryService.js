(function () {
    'use strict';

    function fnBdFactory($q, $http) {

        var fnGetPromise = function () {},
            fnGetJson = function () {},
            fnGetJsonToObject = function () {},
            fnGetUrl = function () {},
            fnSetData = function () {},
            bdFactoryService = {};

        fnGetPromise = function () {
            var deferred = $q.defer(),
                promise = deferred.promise;
            return promise;
        };

        fnGetUrl = function (jsonName) {
            return '../json/' + jsonName + '.json';
        };

        fnGetJson = function (jsonName) {
            var promise = fnGetPromise();
            promise = $http.get(fnGetUrl(jsonName)).then();
            return promise;
        };

        fnGetJsonToObject = function (jsonName) {
            var promise = fnGetPromise();
            promise = $http.get(fnGetUrl(jsonName)).then(function (response) {
                return JSON.parse(response.data);
            });
            return promise;
        };

        fnSetData = function (key, value) {
            sessionStorage.setItem(key, value);
        }

        bdFactoryService = {
            fnGetJson: fnGetJson,
            fnSetData: fnSetData
        };

        return bdFactoryService;
    }
    fnBdFactory.$inject = ['$q', '$http'];

    angular.module('bdFactoryModule', [])
        .factory('bdFactoryService', fnBdFactory);

}());
