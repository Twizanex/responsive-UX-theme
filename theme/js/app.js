/*
author: Developed by Stas Melnikov. http://stas-melnikov.ru
e-mail: melnik909@ya.ru
linkedIn: https://www.linkedin.com/in/melnik909
github: https://github.com/melnik909
facebook: https://www.facebook.com/melnik909
Template created with use of a Responsive Framework http://stas-melnikov.ru/responsive_elements/
*/

//@prepros-append init.js 
//@prepros-append main.js 

(function(){

	var scripts = [

		{
			src: "//yastatic.net/share/share.js",
			async: true,
		},
		{
			src : "../../metrika.js",
			async: true,
		}
	];

	
	window.addEventListener('load', init);
	
	function init(){
	
		var script;
		
		setTimeout(function(){
		
			if(window.outerWidth > 640){
			
				for(var i = 0, scripts_len = scripts.length; i < scripts_len; i++){
				
					script = document.createElement("script");
					script.src = scripts[i].src;
					script.async = scripts[i].async;
					document.body.appendChild(script);
					
				}
			}
		},600);
	}
})();
 