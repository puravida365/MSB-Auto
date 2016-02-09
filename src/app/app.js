(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/about');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("MSBTire", [
    'MSBTire.home',
    'MSBTire.about',
    'MSBTire.services',
    'MSBTire.contact',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'MSBTire.services',
    'MSBTire.contact',
])));
