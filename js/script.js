
// Dropbox

  const dropdownBtn = document.getElementById("btn");
  const dropdownMenu = document.getElementById("dropdown");

  // Toggle dropdown function
  const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
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

// Lightbox

var gallery = $('.gallery');

// vytvorime si overlay
var overlay = $('<div>', { id: 'overlay' });
overlay.appendTo('body').hide();

overlay.on('click', function() {
$(this).fadeOut('fast');
});


// skryjeme overlay na escape
$(document).on('keyup', function(event) {
if ( event.which === 27 ) overlay.fadeOut('fast');
});


// po kliknuti zobrazime lightbox
gallery.find('a').on('click', function(event)
{
var href = $(this).attr('href'),
  image = $('<img>', { src: href, attr: 'learn2code' });

overlay.html( image )
     .show();

event.preventDefault();
});