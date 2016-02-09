(function(app) {

    app.controller('AboutController', function ($scope) {
        var model = this;

        init();

        function init() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.


            $(".navbar-nav li a").click(function(event) {
                $(".navbar-collapse").collapse('hide');
            });

        }

    });

}(angular.module("MSBTire.about")));