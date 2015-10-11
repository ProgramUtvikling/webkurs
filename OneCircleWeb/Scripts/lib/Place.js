define(["magellan"], function (magellan) {
	"use strict";

	function Place(id, title, latitude, longitude) {
		if (!(this instanceof Place)) {
			return new Place(id, title, latitude, longitude);
		}
		this.id = id;
		this.title = title;
		this.latitude = latitude;
		this.longitude = longitude;
	}

	Place.prototype.toString = function () {
		var lat = magellan(this.latitude).latitude().toDMS();
		var lon = magellan(this.longitude).longitude().toDMS();
		return this.title + "(" + lat + ", " + lon + ")";
	};
	
	return Place;
});