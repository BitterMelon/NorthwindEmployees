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
            'Angular Material': 'Always wanted to try it',
            'Bower': 'Makes dependency hell, a little less hellish',
            'Moment.js': 'Never format dates without it',
            'Material Design Data Table': 'For the orders table'
        };
    }
})();
