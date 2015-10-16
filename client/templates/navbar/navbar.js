$(document).ready(function() {
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	$('.modal-trigger').leanModal();
	if (Meteor.user()) {
		$('.signInStatus').text("Sign Out");
	} else {
		$('.signInStatus').text("Sign In");
	}
});