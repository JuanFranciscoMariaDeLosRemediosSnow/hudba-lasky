$(function(){
	var menu = $('.vrch'),
		menuLinks= menu.find('a');

    $('.h-l').find('a').on('click', function(event) {
		event.preventDefault();
    });

    $('.panel').find('a').on('click', function(event) {
		event.preventDefault();
    });


	menuLinks.on('click', function(event) {
        var id = this.hash;

		//animacia scroll na prislusne miesto
		$('html,body').animate({scrollTop: $(id).offset().top}, 2000, function() {
			//prida hash do adresy
			window.location.hash = id;
		});

	});
});


(function($) {
    
    $('#top').parallax({ friction: 0.3 });

})(jQuery);