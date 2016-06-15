define(['angular'],
        function(angular){
    'use strict';
    
    function formatDate() {
        
        function formatDateLinker(scope, element, attrs, model) {
            
            function parseDate(value) {
                var datas = value.split("-");
                return new Date(datas[0], datas[1] - 1, datas[2]);
            }
            
            function formatDate(value) {
                var data = new Date(value);
                return data.toLocaleDateString('fr-CA');
            }
            
            function parser(value) {
                if(value)
                    return parseDate(value);
            }
            
            function formatter(value){
                if(value)
                    return formatDate(value);
            }
            
            model.$parsers.push(parser);
            model.$formatters.push(formatter);
        }
        
        return {
            strict: 'A',
            require: '^ngModel',
            link: formatDateLinker
        }
    }
    
    angular.module('utils').directive('formatDate', formatDate);
});