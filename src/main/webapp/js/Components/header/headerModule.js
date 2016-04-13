(function () {
    'use strict';

    angular.module('headerApp', [])
        .directive('headerApp', fnHeaderApp)
        .factory('headerServices', headerServices);

    function fnHeaderApp() {
        return {
            restrict: 'A',
            controller: FnHeaderController,
            controllerAs: 'headerCtrl',
            // link: fnMountBreadcrumb,
            templateUrl: '../js/Components/header/headerView.html'
        };
    }

    function FnHeaderController() {
        var vm = this,
            fnExit = function () {};

        fnExit = function () {
            sessionStorage.clear();
            location.href = 'index.html';
        };

        vm.userName = sessionStorage.getItem('username');
        vm.fnToExist = fnExit;

        vm.breadcrumb = fnMountBreadcrumb();
    }

    function fnMountBreadcrumb(scope, element, attr) {
        var currentUrl = location.pathname,
            activeUrl = $('#menu-nav').find('a[href="' + currentUrl + '"]'),
            currentNode = activeUrl,
            breadcrumb = [];

        if (activeUrl.length > 0) {

            activeUrl.parent().addClass('active');

            breadcrumb.push(currentNode.text());
            currentNode = currentNode.parent();
            while (!currentNode.is('div')) {
                if (currentNode.find('a:first').text() != breadcrumb[breadcrumb.length - 1]) {
                    breadcrumb.unshift(currentNode.find('a:first').text().trim());
                }
                currentNode = currentNode.parent();
            }
        }

        return breadcrumb;

    }

    function headerServices() {
        var loadJson = function (nomeArquivoJson) {
            var deferred = $q.defer(),
                promise = deferred.promise,
                url = "../json/" + nomeArquivoJson + ".json";

            promise = $http.get(url)
                .success(function (response) {});

            return promise;
        }
        var services = {
            getFromJson: function () {
                return loadJson("menu");
            }
        };

        return services;
    }

}());