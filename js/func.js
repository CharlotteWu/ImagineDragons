function slideShow() {
	$('#gallery a').css({opacity: 0.0});
	$('#gallery a:first').css({opacity: 1.0});
	setInterval('gallery()',2000);
	
}

function gallery() {
	var current = ($('#gallery a.show')?  $('#gallery a.show') : $('#gallery a:first'));
	var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery a:first') :current.next()) : $('#gallery a:first'));
	var win_width=$(window).width();
	var win_height=$(window).height();
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000);
	
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');
	
}



 
 
 function lock()
 {
     $("div.cover img").click(function(){   
	           $(this).addClass(".shadow"); 
			   $(this).addClass(".song"); 
			   $(".shadow").css("display","block");  
			   $(".shadow").width($(document.body).width());
			   $(".shadow").height($(document.body).height()); 
			   $(".song").css("display","block");
	  });
 }
 
 function unlock()
 {
     $("a").click(function(){ 
	    $(".shadow").css("display","none");   
		$(".song").css("display","none");    
	  });
 }