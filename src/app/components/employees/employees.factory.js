/**
 * Fetch Employee data from Northwind
 *
 * by Eric Karlsson
 */

(function() {
    'use strict';

    angular
        .module('ifsEmployees')
        .factory('Employees', Employees);

    /** @ngInject */
    function Employees($resource) {
        var odataUrl = "http://services.odata.org/V4/Northwind/Northwind.svc/Employees";
        return $resource("", {},
            {
                'getAll': { method: "GET", url: odataUrl },
                'get': { method: 'GET', params: { id: "@id" }, url: odataUrl + "(:id)"},
                'getOrders': { method: 'GET', params: { id: "@id" }, url: odataUrl + "(:id)/Orders"}

            });
    }

})();