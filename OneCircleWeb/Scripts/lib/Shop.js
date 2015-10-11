define(["data/Place"], function (Place) {
	"use strict";

	function Shop(id, title, latitude, longitude, whatDoTheySell, openHours) {
	    Place.apply(this, arguments);
	    this.$type = "OneCircleWeb.DAL.Shop, 1CircleWeb";
		this.whatDoTheySell = whatDoTheySell;
		this.openHours = openHours;
	}

	Shop.prototype = Object.create(Place.prototype);

	Shop.prototype.toString = function () {
		var baseToString = Place.prototype.toString.bind(this);
		return baseToString() + " - " + this.whatDoTheySell + "-" + this.openHours;
	};
	
	return Shop;
});