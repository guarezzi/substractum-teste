(function () {
    'use strict';

    function HomeController() {
        var vm = this;
        vm.isLoaded = true;
    }

    angular.module('homeModule', [])
        .controller('HomeController', HomeController);

}())