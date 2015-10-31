if (Meteor.isClient){
  $(document).ready(function() {
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	$('select').material_select();
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


Template.navbar.events({
  'click .signInStatus': function(event) {
    $('#signInOutModal').openModal()
  }
});
}