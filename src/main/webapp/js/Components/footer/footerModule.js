(function () {
    'use strict';

    angular.module('footerApp', [])
        .directive('footerApp', fnFooterApp);

    function fnFooterApp() {
        return {
            controller: FnFooterController,
            controllerAs: 'footerCtrl',
            templateUrl: '../js/Components/footer/footerView.html'
        };
    }

    function FnFooterController() {
        var vm = this;
        vm.developer = 'Luiz Ricardo Guarezzi';
    }
}());