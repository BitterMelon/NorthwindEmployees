/**
 * Change CamelCase strings to "Came Case" strings
 *
 * by Eric Karlsson
 */

(function() {
    'use strict';

    angular
        .module('ifsEmployees')
        .filter('unCamel', unCamel);

    /** @ngInject */
    function unCamel() {
        return function(data) {
            if(!data) {
                return data;
            }
            var stripPrefix = new RegExp('([A-Z])', 'g');
            var addPrefix = ' $1';
            data = data.replace(stripPrefix, addPrefix);

            // Unspace and "ID" strings
            data = data.replace('I D', 'ID');
            return data;
        }
    }

})();
