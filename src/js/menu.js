
$('#mobile-button').click(function() {
	var menu = $('#menu-container'); //SCOPE

	menu.show();
	$('#mobile-button').hide();
	$('#mobile-close').show();

});

$('#mobile-close').click(function() {
	var menu = $('#menu-container'); //SCOPE

	menu.hide();
	$('#mobile-button').show();
	$('#mobile-close').hide();

});

