// Code By Vipul.saxena01@gmail.com
// Simple Javascript using jQuery v1.11.0

// Mouse out Script 
$(document).mouseleave(function(){
		$('.mouseoutModal').show();
});
$(document).mouseenter(function(){
		$('.mouseoutModal').hide();
});

// For Animation
setInterval(function() {
	$('#shakeMe').effect("shake",{direction:"up", times:1, distance:5});
	$('#shakeMe').effect("shake",{direction:"left", times:1, distance:5});
	$('#shakeMe').effect("shake",{direction:"down", times:1, distance:5});
	$('#shakeMe').effect("shake",{direction:"right", times:1, distance:5});
	 $(".absoluteDot").toggleClass("glow");
}, 2000);