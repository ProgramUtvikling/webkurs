define(["knockout", "q", "repos/placeRepo"], function (ko, Q, placeRepo) {
    "use strict";

    var places = ko.observable();
    var placesPromise = placeRepo.getPlaces();
    placesPromise.then(function (data) {
        places(data);
    });

    function gotoPlaces(params) {
        return placesPromise;
    }

    return {
        name: "placeList",
        getViewModel: function () {
            return {
                places: places
            };
        },
        routes: [
            { path: '', action: gotoPlaces },
            { path: '/places', action: gotoPlaces }
        ]
    };

});