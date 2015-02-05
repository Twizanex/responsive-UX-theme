(function($){
	var skills = $('.skills'),
	skillsY = skills.offset().top - 350,
	
	feedback = $('#feedback'),
	button = feedback.find('#button'),
	
	full_menu = feedback.siblings('#collapse');
	
	button.removeAttr("disabled");

	if ("ontouchstart" in document.documentElement){
		skills.addClass('active_skills');
	}

	if(pageYOffset > skillsY) {
		skills.addClass('active_skills');
	}
	
	if ($('body').attr('id') === 'no_touch'){
	
		$(document).on( 'scroll', function() {
			
			if(pageYOffset > skillsY) {
			
				skills.addClass('active_skills');
				
			}else if(skills.hasClass('active_skills')){
				skills.removeClass('active_skills');
			}
		});
	}
})(jQuery)