require.config({
	// baseUrl: "lib/data/",
	paths:{
		magellan: "/node_modules/magellan-coords/magellan"
	}
});


require(["data/Home", "data/Shop", "data/Business"], function (Home, Shop, Business) {
	"use strict";
	
	var p1 = new Home(1, "G47", 59.922300, 10.491150, "Arjan & fam");
	var p2 = new Shop(2, "Marits Klær", 59.922300, 10.491150, "Clothes", "9-18 (10-15)");
	var p3 = new Business(3, "Lofoten Sjokoladefabrikk", 59.922300, 10.491150);
	console.log(p1.toString());
	console.log(p2.toString());
	console.log(p3.toString());

});
