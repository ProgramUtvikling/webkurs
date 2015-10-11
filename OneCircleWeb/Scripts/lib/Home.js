define(["data/Place"], function (Place) {
	"use strict";

	function Home(id, title, latitude, longitude, whoLivesHere) {
	    Place.apply(this, arguments);
	    this.$type = "OneCircleWeb.DAL.Home, 1CircleWeb";
		this.whoLivesHere = whoLivesHere;
	}

	Home.prototype = Object.create(Place.prototype);

	Home.prototype.toString = function () {
		var baseToString = Place.prototype.toString.bind(this);
		return baseToString() + " - " + this.whoLivesHere;
	};
	
	return Home;
});