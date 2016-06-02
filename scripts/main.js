/************************************************************************************************************** debut slider ***********************************************************************************************************************************/
$(document).ready(function(){
	var percent = 0,
	interval = 20,//it takes about 6s, interval=20 takes about 4s
	$bar = $('.transition-timer-carousel-progress-bar'),
	$crsl = $('#myCarousel');
	$('.carousel-indicators li, .carousel-control').click(function (){$bar.css({width:0.5+'%'});});
	/*line above just for showing when controls are clicked the bar goes to 0.5% to make more friendly, 
	if you want when clicked set bar empty, change on width:0.5 to width:0*/
	$crsl.carousel({//initialize
		interval: false,
		pause: true
	}).on('slide.bs.carousel', function (){percent = 0;});//This event fires immediately when the bootstrap slide instance method is invoked.
	function progressBarCarousel() {
		$bar.css({width:percent+'%'});
		percent = percent +0.5;
		if (percent>=100) {
			percent=0;
			$crsl.carousel('next');
		}
	}
	var barInterval = setInterval(progressBarCarousel, interval);//set interval to progressBarCarousel function
	if (!(/Mobi/.test(navigator.userAgent))) {//tests if it isn't mobile
		$crsl.hover(function(){
					clearInterval(barInterval);
				},
				function(){
					barInterval = setInterval(progressBarCarousel, interval);
				}
		);
	}
});
/************************************************************************************************************** fin slider ***********************************************************************************************************************************/


/************************************************************************************************************** debut grille ***********************************************************************************************************************************/


jQuery(document).ready(function ($) {
                $(".gridder").gridderExpander({
                    scrollOffset: 60,
                    scrollTo: "panel", // "panel" or "listitem"
                    animationSpeed: 400,
                    animationEasing: "easeInOutExpo",
                    onStart: function () {
                        console.log("Gridder Inititialized");
                    },
                    onExpanded: function (object) {
                        console.log("Gridder Expanded");
                        $(".carousel").carousel();
                    },
                    onChanged: function (object) {
                        console.log("Gridder Changed");
                    },
                    onClosed: function () {
                        console.log("Gridder Closed");
                    }
                });
            });
/************************************************************************************************************** fin grille ***********************************************************************************************************************************/

/************************************************************************************************************** topbar ***********************************************************************************************************************************/
$(document).ready(function () {

var menu = $('#navbar');
var origOffsetY = menu.offset().top;

function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
        $('#navbar').addClass('navbar-fixed-top');
        $('#navbar').addClass('menu-padding');
    } else {
        $('#navbar').removeClass('navbar-fixed-top');
        $('#navbar').removeClass('menu-padding');
    }


   }

  document.onscroll = scroll;

});

