$(function(){
	var menu = $('.vrch'),
		menuLinks= menu.find('a');

	menuLinks.on('click', function(event) {
		//toto zabrani aby sme preblikli(isli naprv dole potom hore a az potom animacia scrollovania)
		event.preventDefault();

        var id = this.hash;

		//animacia scroll na prislusne miesto
		$('html,body').animate({scrollTop: $(id).offset().top}, 2000, function() {
			//prida hash do adresy
			window.location.hash = id;
		});

	});
});


(function($) {
    
    $('#top').parallax({ friction: -0.8 });

})(jQuery);