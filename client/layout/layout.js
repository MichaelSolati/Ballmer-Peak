Template.layout.onRendered ( function(){
	if (Meteor.isCordova) {
		Session.set("mobileApp", true);
		Session.set("webApp", false);
	} else {
		Session.set("mobileApp", false);
		Session.set("webApp", true);
	}
})