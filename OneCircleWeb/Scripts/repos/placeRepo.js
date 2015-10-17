define(["jquery", "knockout", "q"], function ($, ko, Q) {
    "use strict";
    var placesPromise = Q(
        $.ajax({
            url: '/api/places',
            type: 'GET'
        })
    );

    function getPlaces() {
        return placesPromise;
    }

    function getPlaceById(id) {
        return Q(
            $.ajax({
                url: '/api/places/' + id,
                type: 'GET'
            })
        );
    }

    return {
        getPlaces: getPlaces,
        getPlaceById: getPlaceById
    }

});