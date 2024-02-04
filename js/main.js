/* JS Document */
// -----------------------------------------------------------//

$(document).ready(function()
{
	"use strict";



	// site menu js start

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();



	var windowScrolled = function() {


		$(window).scroll(function() {

			var $w = $(this), st = $w.scrollTop(), navbar = $('.js-site-navbar') ;

			if ( st > 100 ) {
				navbar.addClass('scrolled');
			} else {
				navbar.removeClass('scrolled');
			}
			
		})

	}
	windowScrolled();

	// site menu js end



	// counter js start

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// counter js end




	// progress bar js start

	$(".skill_main").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });

	// progress bar js end




	// fancybox start

	$('.fancybox').on('click', function() {
	  var visibleLinks = $('.fancybox');

	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

	  return false;
	});

	// fancybox end




	// onepage scroll start

	// $(document).ready(function(){
	//   // Add smooth scrolling to all links
	//   $("a").on('click', function(event) {

	//     // Make sure this.hash has a value before overriding default behavior
	//     if (this.hash !== "") {
	//       // Prevent default anchor click behavior
	//       event.preventDefault();

	//       // Store hash
	//       var hash = this.hash;

	//       // Using jQuery's animate() method to add smooth page scroll
	//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	//       $('html, body').animate({
	//         scrollTop: $(hash).offset().top
	//       }, 300, function(){

	//         // Add hash (#) to URL when done scrolling (default click behavior)
	//         window.location.hash = hash;
	//       });
	//     } // End if
	//   });
	// });

	// onepage scroll end




	// movetop start

	$(function() {

		$('.move').click(function () {
	        $('html, body').animate({
	            scrollTop: '0px'
	        },
	        500);
	        return false;
	    });
 	});

 	// movetop end




});















