/*
 *author: Developed by Stas Melnikov. http://stas-melnikov.ru
 */

var ResponsiveUX = {};
 
ResponsiveUX.addClass = function(selector, nameClass){
		
	selector.classList.add(nameClass);
	
}; 

ResponsiveUX.removeClass = function(selector, nameClass){
		
	selector.classList.remove(nameClass);
	
}; 

ResponsiveUX.createSettings = function(defaults, options){
		
	var settings = {},
	key;
	
	for(key in defaults){
		
		if(defaults.hasOwnProperty(key)){
			
			settings[key] = key in options ? options[key] : defaults[key];
			
		}
		
	}
	
	return settings;			
	
};	

ResponsiveUX.smoothScroll = function(start, finish, duration){
	
	var change = finish - start,
	increment = 20,
	currentTime = 0,
	
	animationScroll;

	if(typeof(duration) === "undefined"){
		
		duration = 1000;
		
	}
	
	if(document.body.classList.contains("js-scrolling")){
			
		return;
		
	}
	
	function cancelScroll(){
		
		window.cancelAnimationFrame(animationScroll);
		window.removeEventListener("mousewheel", cancelScroll);
		ResponsiveUX.removeClass(document.body, "js-scrolling");
		
	}

	function scrollToElement(){
	  
		currentTime += increment; 
	  
		if(currentTime < duration){
		 
			window.scrollTo(0, ResponsiveUX.inOutQuintic(currentTime, start, change, duration));
			animationScroll = requestAnimationFrame(scrollToElement);
			
		}else{
			
			cancelScroll();
				
		}		  

	}
	
	animationScroll = requestAnimationFrame(scrollToElement);
	
	ResponsiveUX.addClass(document.body, "js-scrolling");
	window.addEventListener("mousewheel", cancelScroll);
	
};

ResponsiveUX.inOutQuintic = function(currentTime, start, change, duration){
	
	var ts = (currentTime /= duration) * currentTime,
	tc = ts * currentTime; 
	
	return start + change * (6 * tc * ts + -15 * ts * ts + 10 * tc);
	
};