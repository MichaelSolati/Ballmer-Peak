if (Meteor.isClient) {
	Template.logInCheck.rendered = function() {
  		window.location.replace("/");
	};
}