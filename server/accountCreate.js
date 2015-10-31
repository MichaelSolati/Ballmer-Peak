if (Meteor.isServer) {
	Accounts.onCreateUser(function(options, user) {
		var id = user._id;
		var facebook, google, twitter;
		try {
			facebook = user.services.facebook.id;
		} catch (e) {
		}
		try {
			google = user.services.google.id;
		} catch (e) {
		}
		try {
			twitter = user.services.twitter.id;
		} catch (e) {
		}
		if (facebook == 717119361754388 || google == 116854972102822141733 || twitter == 14345604) {
			user.roles = ['admin'];
			Houston._admins.insert({
            'user_id': id
        })
		} else {
			user.roles = ['user'];
		}
		if (options.profile) {
			user.profile = options.profile;
		}
		return user;
	});
}