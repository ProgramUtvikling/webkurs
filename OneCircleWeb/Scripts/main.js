require.config({
    // baseUrl: "lib/data/",
    paths: {
        magellan: "/node_modules/magellan-coords/magellan",
        jquery: "/bower_components/jquery/dist/jquery",
        knockout: "/bower_components/knockout/dist/knockout",
        text: "/bower_components/text/text",
        grapnel: "/bower_components/grapnel/dist/grapnel.min",
        q: "/bower_components/q/q"
    }
});


require(["jquery", "knockout", "grapnel", "sharedRootViewModel", "repos/placeRepo"], function ($, ko, Grapnel, vm, placesRepo) {
    "use strict";

    function registerView(name) {
        ko.components.register(name,
        {
            viewModel: function () {
                return vm;
            },
            template: { require: "text!views/" + name + ".html" }
        });
    }

    function getPlaceById(places, id) {
        var res = places.filter(function (place) {
            return place.id == id;
        });

        return res[0];
    }

    ko.components.register("waitSpinner",
    {
        viewModel: null,
        template: { element: "waitSpinner" }
    });

    registerView("placeList");
    registerView("placeDetails");
    registerView("registerPlace");


    var router = new Grapnel();
    router.get("/places", function () {
        console.log("route for placeList");
        vm.currentComponent("placeList");
        return false;
    });

    router.get("/places/id=:id?", function (req) {
        var id = req.params.id;
        console.log("route for placeDetails, id: " + id);
        vm.current(getPlaceById(vm.places(), id));
        vm.currentComponent("placeDetails");
        return false;
    });

    //router.get("/places/register", function () {
    //    console.log("route for registerPlace");
    //    vm.currentComponent("registerPlace");
    //    return false;
    //});




    vm.currentComponent("waitSpinner");
    ko.applyBindings(vm);

    placesRepo.getPlaces().then(
        function (data) {
            console.log("We've got data");
            vm.places(data);
            vm.currentComponent("placeList");
        }, function(err) {
            console.log("failed (in main) " + err);
        }
    );

});
