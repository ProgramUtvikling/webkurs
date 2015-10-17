require.config({
    baseUrl: "/Scripts",
    paths: {
        magellan: "/node_modules/magellan-coords/magellan",
        jquery: "/bower_components/jquery/dist/jquery",
        knockout: "/bower_components/knockout/dist/knockout",
        text: "/bower_components/text/text",
        grapnel: "/bower_components/grapnel/dist/grapnel.min",
        q: "/bower_components/q/q"
    }
});


require(["jquery", "knockout", "grapnel", "q"], function ($, ko, Grapnel, Q) {
    "use strict";

    var rootPageVm = {
        currentView: ko.observable("waitSpinner")
    };

    var router = new Grapnel();

    function registerView(componentName) {
        var d = Q.defer();
        require([componentName], function(component) {
            ko.components.register(component.name,
            {
                viewModel: component.getViewModel || null,
                template: { require: "text!" + componentName + ".html" }
            });

            component.routes.forEach(function(route) {
                router.get(route.path, function(req) {
                    var promise = route.action(req.params);

                    if (promise && promise.then) {
                        promise.then(function() {
                            rootPageVm.currentView(component.name);
                        });
                    } else {
                        rootPageVm.currentView(component.name);
                    }

                    return false;
                });
            });
        
            d.resolve();
        });
        return d.promise;
    }


    ko.components.register("waitSpinner",
    {
        viewModel: null,
        template: { element: "waitSpinner" }
    });

    Q.all([
        registerView("views/placeList"),
        registerView("views/placeDetails"),
        //registerView("registerPlace")
    ]).then(function() {
        ko.applyBindings(rootPageVm);
    });

});
