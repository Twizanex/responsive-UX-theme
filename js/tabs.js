/*
author: Developed by Stas Melnikov. http://stas-melnikov.ru
e-mail: melnik909@ya.ru
linkedIn: https://www.linkedin.com/in/melnik909
github: https://github.com/melnik909
facebook: https://www.facebook.com/melnik909
*/

(function($){
	var element;
	//tabs

	$('.tabs').on('click', 'li:not(.current)', function() {

		element = $(this).parents('.tabs_container');
		$(this).Tabs(element);
			
	});


	$.fn.Tabs = function(element){

		$(this).addClass('current').siblings().removeClass('current');
		
		element.find('.box').eq($(this).index()).show(1,function(){
		
			$(this).addClass('show_tab');
			
		}).siblings('.box').hide(1,function(){
		
			$(this).removeClass('show_tab');
		});
	};
})(jQuery);