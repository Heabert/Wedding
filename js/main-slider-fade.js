<<<<<<< HEAD
	'use strict';
	
	// MAIN SLIDER-FLEXSLIDER
	//==================================================================================
	$(window).load(function() {
		$('#main-slider.flexslider').flexslider(
		{
			animation : "fade",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 5000,  
			animationSpeed:1000,
			pauseOnAction: false,
			animationLoop: true, 
			pauseOnHover: true,			
		});
	});
	
	
	// Check FIREFOX 
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	if (is_firefox() || isIE11desktop()){
		$('.flexslider .slides').addClass("css-fade");
	}
=======
<<<<<<< HEAD
	'use strict';
	
	// MAIN SLIDER-FLEXSLIDER
	//==================================================================================
	$(window).load(function() {
		$('#main-slider.flexslider').flexslider(
		{
			animation : "fade",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 5000,  
			animationSpeed:1000,
			pauseOnAction: false,
			animationLoop: true, 
			pauseOnHover: true,			
		});
	});
	
	
	// Check FIREFOX 
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	if (is_firefox() || isIE11desktop()){
		$('.flexslider .slides').addClass("css-fade");
	}
=======
	'use strict';
	
	// MAIN SLIDER-FLEXSLIDER
	//==================================================================================
	$(window).load(function() {
		$('#main-slider.flexslider').flexslider(
		{
			animation : "fade",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 5000,  
			animationSpeed:1000,
			pauseOnAction: false,
			animationLoop: true, 
			pauseOnHover: true,			
		});
	});
	
	
	// Check FIREFOX 
	//----------------------------------------------------------------------------------
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// Check IE11 (Not Windows Phone)
	///----------------------------------------------------------------------------------
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	if (is_firefox() || isIE11desktop()){
		$('.flexslider .slides').addClass("css-fade");
	}
>>>>>>> 9bd5b5ae1a39292bcac85742028e9d87d2034223
>>>>>>> 02571176791c99880935d7629830d407b93e6e93
	