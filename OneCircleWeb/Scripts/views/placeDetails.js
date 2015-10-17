define(["knockout", "q", "repos/placeRepo"], function (ko, Q, placeRepo) {
    "use strict";

    var place = ko.observable();

    function getPlaceById(places, id) {
        var res = places.filter(function (place) {
            return place.id == id;
        });

        return res[0];
    }

    function gotoPlace(params) {
        var res = Q.defer();

        place(null);

        placeRepo.getPlaces().then(function (data) {
            var currentPlace = getPlaceById(data, params.id);
            place(currentPlace);

            res.resolve();
        });

        return res.promise;
    }

    return {
        name: "placeDetails",
        getViewModel: function () {
            return {
                place: place
            };
        },
        routes: [
            { path: '/places/id=:id', action: gotoPlace }
        ]
    };

});