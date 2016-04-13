(function () {
    'use strict';
    
    function FnPaginatorController($scope) {
        var totalPages = 0,
            index = 0,
            fnSetPages = function () {},
            fnSetCurrentPage = function () {};
        
        $scope.pages = [];
        
        fnSetPages = function () {
            totalPages = Math.ceil($scope.paginatorData / $scope.quantityData);

            if (totalPages) {
                $scope.pages = [];
                for (index; index < totalPages; index++) {
                    $scope.pages.push(index + 1);
                }
            }
        };
        
        fnSetCurrentPage = function (page) {
            if (page > 0 && page <= $scope.pages.length) {
                $scope.currentPage = page;
            }
        };
        
        $scope.currentPage = 1;
        $scope.$watch('paginatorData', fnSetPages);
        $scope.setPage = fnSetCurrentPage;
    }
    FnPaginatorController.$inject = ['$scope'];
    
    function fnPaginator() {
        return {
            restrict: 'AE',
            scope: {
                paginatorData: '=',
                quantityData: '@',
                currentPage: '='
            },
            templateUrl: '../js/Components/paginator/paginatorView.html',
            controller: FnPaginatorController
        };
    }
    
    function fnFilter() {
        return function (itens, currentPage, quantityPerPage) {

            function filterItens() {
                var index = 0,
                    firstIndex = (currentPage - 1) * quantityPerPage,
                    lastIndex = currentPage * quantityPerPage,
                    currentItens = [];

                for (index; index < itens.length; index++) {
                    if (index >= firstIndex &&
                            index < lastIndex) {
                        currentItens.push(itens[index]);
                    }
                }

                return currentItens;
            }

            if (angular.isDefined(currentPage) && angular.isDefined(quantityPerPage) && itens && itens.length) {
                return filterItens();
            }
        };
    }

    angular.module('paginatorModule', [])
        .directive('paginator', fnPaginator)
        .filter('paginatorFilter', fnFilter);
}());
