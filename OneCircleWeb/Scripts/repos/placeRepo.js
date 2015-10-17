define(["jquery", "knockout", "q"], function ($, ko, q) {
    "use strict";

    var places = q.defer();

    $.ajax({
        url: '/api/places',
        type: 'GET'
    }).then(
        function (data) {
            console.log("got places from webapi");
            places.resolve(data);
        },
        function (reason) {
            console.log("failed getting places from webapi");
            places.reject(reason);
        }
    );


    function getPlaces() {

        return places.promise;
    }

    //function getPlaceById(id) {

    //}

    return {
        getPlaces: getPlaces
        //getPlaceById: getPlaceById
    }

});