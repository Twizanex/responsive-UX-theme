/*
author: Developed by Stas Melnikov. http://stas-melnikov.ru
e-mail: melnik909@ya.ru
linkedIn: https://www.linkedin.com/in/melnik909
github: https://github.com/melnik909
facebook: https://www.facebook.com/melnik909
*/

(function(){
 
	var open_full_menu = document.body.querySelector('#icon_menu'),
	close_menu = document.body.querySelector('#close_menu');

	open_full_menu.addEventListener( 'click', Show_Menu, false );
	close_menu.addEventListener( 'click', Hide_Menu, false );
	
	function Show_Menu( ) {

		setTimeout(function(){
			document.body.classList.add('active_full_menu');
		}, 100);
	}
	 
	function Hide_Menu( ) {

		setTimeout(function(){
			document.body.classList.remove('active_full_menu');
		}, 100);
	}
})();