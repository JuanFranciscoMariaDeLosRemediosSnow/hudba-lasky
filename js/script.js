// Animacia scrollovania
$(function(){
	var menu = $('.vrch'),
		menuLinks= menu.find('a');

    $('.h-l').find('a').on('click', function(event) {
		event.preventDefault();
    });

    $('.panel').find('a').on('click', function(event) {
		event.preventDefault();
    });

    $('.dropdown').find('a').on('click', function(event) {
		event.preventDefault();
    });


	menuLinks.on('click', function(event) {
        var id = this.hash;

		//animacia scroll na prislusne miesto
		$('html,body').animate({scrollTop: $(id).offset().top}, 1000, function() {
			//prida hash do adresy
			window.location.hash = id;
		});

	});
});

// Zavolanie parallax efektu

(function($) {
    
    $('#top').parallax({ friction: 0.3 });

})(jQuery);

// Dropbox

const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
//const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
  //toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});