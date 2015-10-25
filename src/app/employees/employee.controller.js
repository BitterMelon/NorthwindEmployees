(function () {
    'use strict';

    angular
        .module('ifsEmployees')
        .controller('EmployeeController', EmployeeController);

    /** @ngInject */
    function EmployeeController(Employees, $stateParams) {
        var vm = this;

        vm.employee = Employees.get({id: $stateParams.id}, function(employee) {
            if(employee.ReportsTo) {
                // Get whoever this Employee reports to (for linking)
                vm.reportsTo = Employees.get({id: employee.ReportsTo});
            } else {
                vm.reportsTo = null;
            }

            // Load orders after the Employee data has been loaded
            vm.orders = Employees.getOrders({id: $stateParams.id});
        });

        // List of employee attributes to loop over
        vm.attributes = [
            'HireDate',
            'HomePhone',
            'Extension',
            'ReportsTo',
            'Notes'
        ];

        // Prepare regex to skip shipping columns in the table loop
        vm.avoidShip = new RegExp('^Ship[A-Z]');

        // Default ordering
        vm.ordering = 'OrderID';
    }
})();
