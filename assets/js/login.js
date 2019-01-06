// Login

$('.forgot').click(function(){
	$('#forgot').show(500),
	$('#log').hide(500);
});

$('.register').click(function(){

	$('#register').show(500),
	$('#log').hide(500);
});

$('.back').click(function(){
	$('#log').show(500),
	$('#forgot, #register').hide(500);
});

$("section").click(function(e) {
	e.stopPropagation();
});
