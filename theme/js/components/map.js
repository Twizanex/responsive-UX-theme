
ResponsiveUX.CreateGoogleMap = function(options){
		
	var scope = this,	
		
	defaults = {
		
		mapNodeDOM: null,
		lat: 0,
		lng: 0,
		
		zoom: 17,
		mapTypeId: google.maps.MapTypeId.roadmap,
		scrollwheel: false,
		scaleControl: false
		
	},	
		
	settings = ResponsiveUX.createSettings(defaults, options);
		
	scope.googleMap = new google.maps.Map(settings.mapNodeDOM, settings);
	scope.googleMap.setCenter(new google.maps.LatLng(settings.lat, settings.lng));
	
	scope.marker = new google.maps.Marker({
		
		position: new google.maps.LatLng(settings.lat, settings.lng),
		map: scope.googleMap,
		icon: settings.pathIcon
		
	});
	
	return scope;
	
};