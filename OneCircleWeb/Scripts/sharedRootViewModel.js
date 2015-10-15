define(["knockout"], function (ko) {
    "use strict";

    var current = ko.observable();
    var places = ko.observableArray();
    var currentComponent = ko.observable();

    return  {
        currentComponent: currentComponent,
        places: places,
        current: current,
        click: function (data) {
            currentComponent("placeDetails");
            current(data);
        },
        back: function () {
            currentComponent("placeList");
            current(null);
        }
    };

});
