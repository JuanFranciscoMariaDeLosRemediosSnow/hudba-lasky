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






(function($, window, document, undefined) {

    /*$.fn.parallax = function(options) {
        var settings = $extend({},options);
        
        var $win = $(window);

        return this.each(function() {
            var element = $(this);

            $win.on('scroll', function() {
                var bgTop = element.offset().top,
                    winTop = $win.scrollTop(),
                    bgPositonLeft = element.css('backgroundPositionX');

                console.log(bgTop, winTop, Math.floor((bgTop - winTop) * 0.2));
            });
        });
    }  
    
    $('#one').parallax();*/

})(jQuery);