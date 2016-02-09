(function(module) {
    
    module.config(function ($stateProvider) {
        $stateProvider.state('contact', {
            url: '/contact',
            views: {
                "main": {
                    controller: 'ContactController as model',
                    templateUrl: 'contact/contact.tpl.html'
                }
            },
            data:{ pageTitle: 'Contact' }
        });
    });
    
}(angular.module('MSBTire.contact', [
    'ui.router'
])));
