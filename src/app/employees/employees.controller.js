(function() {
  'use strict';

  angular
    .module('ifsEmployees')
    .controller('EmployeesController', EmployeesController);

  /** @ngInject */
  function EmployeesController(Employees) {
    var vm = this;

    vm.employees = Employees.getAll();
  }
})();
