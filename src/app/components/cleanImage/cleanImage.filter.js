/**
 * Clean the image data from Northwind and convert it to properly prefixed data for image tags
 *
 * by Eric Karlsson
 */

(function() {
    'use strict';

    angular
        .module('ifsEmployees')
        .filter('cleanImage', cleanImage);

    /** @ngInject */
    function cleanImage() {
        return function(data) {
            if(!data) {
                return data;
            }
            var stripPrefix = new RegExp('^FRwvAAIAAAANAA4AFAAhAP////9CaXRtYXAgSW1hZ2UAUGFpbnQuUGljdHVyZQABBQAAAgAAAAcAAABQQnJ1c2gAAAAAAAAAAA(Ag|CA)VAAA');
            var addPrefix = 'data:image/bmp;base64,';
            return data.replace(stripPrefix, addPrefix);
        }
    }

})();
