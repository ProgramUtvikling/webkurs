define(["./Place"], function (Place) {
	"use strict";

	function Business(id, title, latitude, longitude, whoLivesHere) {
	    Place.apply(this, arguments);
	    this.$type = "OneCircleWeb.DAL.Business, 1CircleWeb";
	}

	Business.prototype = Object.create(Place.prototype);

	return Business;
});

