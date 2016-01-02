Template.drinkHistory.helpers({
	drinks: function() {
		return DrinkLog.find({}, {sort: {epoch: -1}}).fetch();
	},
});
