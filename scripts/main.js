/***************************************
****************************************
-            DEBUT SLIDER             -
****************************************
***************************************/

$(document).ready(function(){
	var percent = 0,
			interval = 20,
			$bar = $('.transition-timer-carousel-progress-bar'),
			$crsl = $('#myCarousel');
	$('.carousel-indicators li, .carousel-control').click(function (){$bar.css({width:0.5+'%'});});

	$crsl.carousel({
		interval: false,
		pause: true
	}).on('slide.bs.carousel', function (){percent = 0;});
	function progressBarCarousel() {
		$bar.css({width:percent+'%'});
		percent = percent +0.5;
		if (percent>=100) {
			percent=0;
			$crsl.carousel('next');
		}
	}
	var barInterval = setInterval(progressBarCarousel, interval);
	if (!(/Mobi/.test(navigator.userAgent))) {
		$crsl.hover(function(){
			clearInterval(barInterval);
		},
								function(){
			barInterval = setInterval(progressBarCarousel, interval);
		}
							 );
	}
});

/***************************************
****************************************
-             FIN SLIDER              -
****************************************
***************************************/


/***************************************
****************************************
-            DEBUT GRILLE             -
****************************************
***************************************/


jQuery(document).ready(function ($) {
	$(".gridder").gridderExpander({
		scrollOffset: 60,
		scrollTo: "panel", 
		animationSpeed: 800,
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

/***************************************
****************************************
-              FIN GRILLE              -
****************************************
***************************************/

/***************************************
****************************************
-               TOPBAR                 -
****************************************
***************************************/

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

/***************************************
****************************************
-     APPARITION/DISPARITION TEXTE     -
****************************************
***************************************/

function affiche_contenu() {
	var cible = document.getElementById('cible');
	if(cible.style.display != '') {
		cible.style.display = '';
	} else {
		cible.style.display = 'none';
	}
}

function affiche_contenu1() {
	var cible = document.getElementById('cible1');
	if(cible.style.display != '') {
		cible.style.display = '';
	} else {
		cible.style.display = 'none';
	}
}

function affiche_contenu3() {
	var cible = document.getElementById('cible2');
	if(cible.style.display != '') {
		cible.style.display = '';
	} else {
		cible.style.display = 'none';
	}
}
