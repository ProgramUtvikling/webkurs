require.config({
    // baseUrl: "lib/data/",
    paths: {
        magellan: "/node_modules/magellan-coords/magellan",
        jquery: "/bower_components/jquery/dist/jquery",
        knockout: "/bower_components/knockout/dist/knockout",
        text: "/bower_components/text/text"
    }
});


require(["jquery", "knockout"], function ($, ko) {
    "use strict";

    var current = ko.observable();
    var places = ko.observableArray();
    var currentComponent = ko.observable("waitSpinner");

    var vm = {
        currentComponent: currentComponent,
        places: places,
        current: current
    };


    function click(data) {
        currentComponent("placeDetails");
        current(data);
    }

    function back() {
        currentComponent("placeList");
        current(null);
    }


    ko.components.register("waitSpinner",
    {
        viewModel: null,
        template: { element: "waitSpinner" }
    });

    ko.components.register("placeList",
    {
        viewModel: function () {
            return {
                places: vm.places,
                click: click
            }
        },
        template: { require: "text!views/placeList.html" }
    });

    ko.components.register("placeDetails", {
        viewModel: function () {
            return {
                current: vm.current,
                back: back
            }
        },
        template: { require: "text!views/placeDetails.html" }
    });


    ko.applyBindings(vm);

    $.ajax({
        url: '/api/places',
        type: 'GET'
    }).then(function (data) {
        places(data);
        currentComponent("placeList");

    });

});
