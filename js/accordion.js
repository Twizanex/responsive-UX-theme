/*
author: Developed by Stas Melnikov. http://stas-melnikov.ru
e-mail: melnik909@ya.ru
linkedIn: https://www.linkedin.com/in/melnik909
github: https://github.com/melnik909
facebook: https://www.facebook.com/melnik909
*/
(function($){
	var accordion_list_item,info_block;
	
	$('.title_info_block').on('click', function(){

		accordion_list_item = $(this).parents('.accordion_list_item');
		info_block = accordion_list_item.find('.info');
		
		if (accordion_list_item.hasClass('active_info_block')) {
			accordion_list_item.removeClass('active_info_block');
			info_block.slideUp();
		}
		else {
			accordion_list_item.addClass('active_info_block');
			info_block.stop(true, true).slideDown();
			accordion_list_item.siblings('.active_info_block').removeClass('active_info_block').children('.info').stop(true, true).slideUp();
		}
	});
})(jQuery);