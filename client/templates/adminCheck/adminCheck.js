if (Meteor.isClient) {
	Template.adminCheck.rendered = function() {
  		window.location.replace("/");
	};
}