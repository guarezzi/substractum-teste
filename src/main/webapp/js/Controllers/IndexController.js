angular.module('mainModule', [])
    .controller('IndexController', ['$scope',
        function($scope) {
            'use stricts';

            $scope.teste = '';

            $scope.inicioApp = function() {
                $scope.teste = 'Hello world!';
            }

        }
    ]);
