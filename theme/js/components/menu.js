
ResponsiveUX.initMenu = function(){
	
	var menu_links = document.querySelectorAll(".js-menu__link");
	
	function showMobileMenu(){
		
		ResponsiveUX.addClass(document.body, "js-mobile-menu_active");
		
	}
	
	function hideMobileMenu(){
		
		ResponsiveUX.removeClass(document.body, "js-mobile-menu_active");
		
	}	
	
	function scrollToSection(event){
		
		event.preventDefault();
		
		var start = window.pageYOffset, 
		finish = document.body.querySelector(this.getAttribute("href")).offsetTop - document.body.querySelector(".header_js").offsetHeight;
		
		if(this.classList.contains("mobile-menu__link")){
			
			ResponsiveUX.removeClass(document.body, "js-mobile-menu_active");

		}
		
		ResponsiveUX.smoothScroll(start, finish);
		
	}
	
	for (var i = 0, len = menu_links.length; len > i; i++) {
		
        menu_links[i].addEventListener("click", scrollToSection);
		
    }
	
	document.querySelector(".js-menu__icon").addEventListener("click", showMobileMenu);
	document.querySelector(".js-menu-close").addEventListener("click", hideMobileMenu);	
	
};

