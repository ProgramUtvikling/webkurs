require.config({
	// baseUrl: "lib/data/",
	paths:{
	    magellan: "/node_modules/magellan-coords/magellan",
        jquery: "/bower_components/jquery/dist/jquery"
	}
});


require(["lib/Home", "lib/Shop", "lib/Business", "jquery"], function (Home, Shop, Business, $) {
	"use strict";
	
	var p1 = new Home(1, "G47", 59.922300, 10.491150, "Arjan & fam");
	var p2 = new Shop(2, "Marits Klær", 59.922300, 10.491150, "Clothes", "9-18 (10-15)");
	var p3 = new Business(3, "Lofoten Sjokoladefabrikk", 59.922300, 10.491150);
	console.log(p1.toString());
	console.log(p2.toString());
	console.log(p3.toString());

	$("<div>jQuery succesfully loaded</div>").prependTo("body");

});
