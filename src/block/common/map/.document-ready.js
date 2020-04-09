var mapYA = $("#yandex_map");
if(mapYA.length > 0) { 
	ymaps.ready(init);
}
function init(){
	var mainMap = $("[data-map-base]");
	var mainCoord = mainMap.attr("data-c");
	var mainCoord = mainCoord.split(" ");

    var myMap = new ymaps.Map("yandex_map", {
        center: mainCoord,
        zoom: 16,
        controls: []
    });

	var object = $("[data-coord]");
	var scrollto = $("[data-scrollto]");
    for(var i = 0; i < object.length; i++) {
		var arCoord = object[i].dataset.c;
    	var arCoord = arCoord.split(" ");
		var arAddr = object[i].dataset.addr;
	   	var myGeoObject = new ymaps.GeoObject({
	        geometry: {
	            type: "Point",
	            coordinates: arCoord
	        },
	        /*properties: {
	            iconContent: arAddr,
	        }*/
	    }, {
	        preset: 'islands#blueStretchyIcon',
	    });
	    myMap.geoObjects.add(myGeoObject);
	}
	object.click(function(e) {
		e.preventDefault();
		var curr_cood = $(this).attr("data-c");
		var curr_cood = curr_cood.split(" ");
		var currAdres = $(this).attr("data-addr");
		var currCity = $(this).attr("data-city");
		var currEmail = $(this).attr("data-email");
		var currClock = $(this).attr("data-clock");
		//console.log(curr_cood);
		$('.map__block').find('[data-map-heading]').text(currCity);
		$('.map__block').find('[data-map-address]').text(currAdres);
		$('.map__block').find('[data-map-email]').text(currEmail);
		$('.map__block').find('[data-map-clock]').text(currClock);
		myMap.setCenter(curr_cood, 16);
		$(this).closest('.dropdown__nav').find('.dropdown__nav-link').removeClass("is--active");
		$(this).closest('.dropdown__card').find('.dropdown__toggle').text($(this).text());
		$(this).addClass("is--active");
	});
	scrollto.click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ($('.map__block').offset().top - 111)
		}, 777);
	});
}
