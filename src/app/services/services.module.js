(function(module) {
    
    module.config(function ($stateProvider) {
        $stateProvider.state('services', {
            url: '/services',
            views: {
                "main": {
                    controller: 'ServicesController as model',
                    templateUrl: 'services/services.tpl.html'
                }
            },
            data:{ pageTitle: 'Services' }
        });
    });
    
}(angular.module('MSBTire.services', [
    'ui.router'
])));
