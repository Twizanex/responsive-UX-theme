/*
author: Developed by Stas Melnikov. http://stas-melnikov.ru
e-mail: melnik909@ya.ru
linkedIn: https://www.linkedin.com/in/melnik909
github: https://github.com/melnik909
facebook: https://www.facebook.com/melnik909
*/

(function($){
	var skills = $('.skills'),
	skillsY = skills.offset().top - 350,
	
	feedback = $('#feedback'),
	button = feedback.find('#button');
	
	button.removeAttr("disabled");

	if ("ontouchstart" in document.documentElement){
		skills.addClass('active_skills');
	}

	if(window.pageYOffset > skillsY) {
		skills.addClass('active_skills');
	}
	
	if ($('body').attr('id') === 'no_touch'){
	
		$(document).on( 'scroll', function() {
			
			if(window.pageYOffset > skillsY) {
			
				skills.addClass('active_skills');
				
			}else if(skills.hasClass('active_skills')){
				skills.removeClass('active_skills');
			}
		});
	}
})(jQuery);