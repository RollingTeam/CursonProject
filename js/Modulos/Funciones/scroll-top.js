$(document).ready(function() {
	$('#volver-arriba').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});