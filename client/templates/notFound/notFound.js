if (Meteor.isClient) {
	Template.notFound.rendered = function() {
		window.setInterval(function() {
    		window.location.replace("/");
  		}, 3000);
	};
}