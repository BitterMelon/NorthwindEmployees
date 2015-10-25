(function () {
    'use strict';

    angular
        .module('ifsEmployees')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;

        vm.tools = {
            'Yeoman': 'Using the "gulp-angular" generator',
            'AngularJS': 'Plays well with REST',
            'SASS': 'Because SCSS >> CSS',
            'Bootstrap': 'It\'s really handy',
            'Bower': 'Makes dependency hell, a little less hellish',
            'Moment.js': 'Never format dates without it',
        };
    }
})();
