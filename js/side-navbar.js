<<<<<<< HEAD

$(document).ready(function() {
			
	//slidebar				
	$.slidebars();
	
	$("#close-button").click(function(e){
		e.preventDefault();
		$.slidebars.close();
	});
	
	$('#side-nav-menu li a').click(function(e){
		var href_value = $(this).attr("href");
		if(href_value == "#"){
			e.preventDefault();
		}
	});
	
	$('#side-nav-menu li:has(> ul) a').click(function(){
		var this_ul = $(this).next("ul");				
		this_ul.toggleClass("expand");		
	});
	
	$("#menu-icon, #sticky-menuicon a").click(function(e){
		e.preventDefault();
	});
	
	
		
			
});
			 
			
			
			
			
			
			
			
			
=======
<<<<<<< HEAD

$(document).ready(function() {
			
	//slidebar				
	$.slidebars();
	
	$("#close-button").click(function(e){
		e.preventDefault();
		$.slidebars.close();
	});
	
	$('#side-nav-menu li a').click(function(e){
		var href_value = $(this).attr("href");
		if(href_value == "#"){
			e.preventDefault();
		}
	});
	
	$('#side-nav-menu li:has(> ul) a').click(function(){
		var this_ul = $(this).next("ul");				
		this_ul.toggleClass("expand");		
	});
	
	$("#menu-icon, #sticky-menuicon a").click(function(e){
		e.preventDefault();
	});
	
	
		
			
});
			 
			
			
			
			
			
			
			
			
=======

$(document).ready(function() {
			
	//slidebar				
	$.slidebars();
	
	$("#close-button").click(function(e){
		e.preventDefault();
		$.slidebars.close();
	});
	
	$('#side-nav-menu li a').click(function(e){
		var href_value = $(this).attr("href");
		if(href_value == "#"){
			e.preventDefault();
		}
	});
	
	$('#side-nav-menu li:has(> ul) a').click(function(){
		var this_ul = $(this).next("ul");				
		this_ul.toggleClass("expand");		
	});
	
	$("#menu-icon, #sticky-menuicon a").click(function(e){
		e.preventDefault();
	});
	
	
		
			
});
			 
			
			
			
			
			
			
			
			
>>>>>>> 9bd5b5ae1a39292bcac85742028e9d87d2034223
>>>>>>> 02571176791c99880935d7629830d407b93e6e93
		