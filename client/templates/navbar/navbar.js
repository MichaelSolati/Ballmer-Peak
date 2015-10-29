$(document).ready(function() {
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	$('select').material_select();
	$('.modal-trigger').leanModal();
	if (Meteor.user()) {
		$('.signInStatus').text("Dashboard");
	} else {
		$('.signInStatus').text("Sign In");
	}
});

Template.navbar.events({
  'click .signInStatus': function(event) {
    if (Meteor.user()){
        $('.signInStatus').text("Dashboard");
    } else {
    	$('.signInStatus').text("Sign In");
    }
  }
});