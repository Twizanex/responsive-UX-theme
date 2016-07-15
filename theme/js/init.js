
ResponsiveUX.initGoogleMap = function(){
	
	var mapNodeDOM = document.querySelector("#js-google-map"),
	
	map = new ResponsiveUX.CreateGoogleMap({
		
		mapNodeDOM: mapNodeDOM,
		lat: mapNodeDOM.getAttribute("data-lat"),
		lng: mapNodeDOM.getAttribute("data-lng"),
		pathIcon: mapNodeDOM.getAttribute("data-path-icon")
		
	});
	
};

(function(){

	var scriptGoogleMap = document.createElement("script");
 
	scriptGoogleMap.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDEN_8Sph4q9GwhWKKnsOP5bl4Frwyo3aM&amp;sensor=false&callback=ResponsiveUX.initGoogleMap";
	scriptGoogleMap.async = true;
	
	function initTheme(){
		
		ResponsiveUX.addClass(document.body, "page-load");
		document.body.appendChild(scriptGoogleMap);
		ResponsiveUX.initMenu();
		
	}

	window.addEventListener("load", initTheme);
	
})();