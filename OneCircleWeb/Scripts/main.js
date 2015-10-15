require.config({
	// baseUrl: "lib/data/",
	paths:{
	    magellan: "/node_modules/magellan-coords/magellan",
	    jquery: "/bower_components/jquery/dist/jquery",
        knockout: "/bower_components/knockout/dist/knockout"
	}
});


require(["jquery", "knockout"], function ($, ko) {
	"use strict";

    var current = ko.observable();
    var places = ko.observableArray();

    var vm = {
        places: places,
        current: current,
        click: function(data) {
            current(data);
        },
        back: function() {
            current(null);
        }
    };

    ko.applyBindings(vm);

	$.ajax({
	    url: '/api/places',
        type: 'GET'
	}).then(function (data) {
	    places(data);
	});

});
