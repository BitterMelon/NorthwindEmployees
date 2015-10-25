(function () {
    'use strict';

    angular
        .module('ifsEmployees')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('employee', {
                url: '/employees/:id',
                templateUrl: 'app/employees/employee.html',
                controller: 'EmployeeController',
                controllerAs: 'employeeCtrl'
            })
            .state('employees', {
                url: '/employees',
                templateUrl: 'app/employees/employees.html',
                controller: 'EmployeesController',
                controllerAs: 'employeesCtrl'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
