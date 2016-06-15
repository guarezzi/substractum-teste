define(['angular'],
      function(angular){
   'use strict';
    
    // private function
    function removeMask(value, maskFormat) {
            
        var newValue = '',
            mask = maskFormat.split("8").join("");
        
        for(var key in value) {
            if( mask.indexOf(value[key]) < 0 ) {
                newValue += value[key];
            }
        }
        
        return newValue;
    }
    
    function applyCustomFormat(value, maskFormat) {
        
        var maskRange = maskFormat.split("8").reverse(),
            newValue = removeMask(value, maskFormat).split("").reverse().join(""),
            newRange = [];
        
        for(var i = 0; i < newValue.length; i++) {
            if(maskRange[i] != "")
                newRange.unshift(maskRange[i]);
            newRange.unshift(newValue[i]);
        }
            
        return value = newRange.join("");
    }
    
    // Directives functions
    function customTextMask() {
        
        function maskFormatLink(scope, element, attrs, model) {
             
            function formatter(){
                if(model.$viewValue)
                    model.$setViewValue(applyCustomFormat(model.$viewValue, scope.maskFormat));
                    
                model.$render();
            }
            
            element.on('keyup', formatter);
            
        }
        
        return {
            strict: 'A',
            require: '^ngModel',
            link: maskFormatLink,
            scope: {
                maskFormat: '@'
            }
        };
    }
    
    function monetaryMask() {
        
        function monetaryMaskLink(scope, element, attrs, model) {
            
            function parser(value) {
                if(value){
                    var maskedValue = applyCustomFormat(value, scope.maskFormat)
                    model.$viewValue = maskedValue;
                    model.$render();
                    return Number(maskedValue.replace('.','').replace(',','.'));
                }
                return Number(value); 
            }

            model.$parsers.push(parser);
            
        }
        
        return {
            strict: 'A',
            require: '^ngModel',
            link: monetaryMaskLink,
            scope: {
                maskFormat: '@'
            }
        };
    }
    
    angular.module('utils').directive('monetaryMask', monetaryMask);
    angular.module('utils').directive('customTextMask', customTextMask);
    
});