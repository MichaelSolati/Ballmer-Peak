if (Meteor.isServer) {
	Meteor.publish("drink-history", function () {
		return DrinkLog.find({User: this.userId});
	})
	Meteor.publish("bac", function () {
		return BAC.find({User: this.userId});
	})

	Meteor.publish("accountsMerged", function () {
		return Meteor.users.find({_id: this.userId});
	})
}