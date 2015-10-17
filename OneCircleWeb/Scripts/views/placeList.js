define(["sharedRootViewModel"], function (vm) {
    "use strict";

    return {
        route: '/place',
        getViewModel: function () { return vm; },
        init: function(params) {
            // ensure necessary data is loaded data into the view
        }
    };

});