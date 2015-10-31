Meteor.methods({
    'logDrink': function(user, drink, alcohol, volume, date){
    	DrinkLog.insert({
            'User': user,
            'Drink': drink,
            'Alcohol': alcohol,
            'Volume': volume,
            'epoch': Date.now(),
            'Date' : date
        })
    },
    'drinkHistory': function(userID){
        var history = DrinkLog.find({user:userID}, {sort: {epoch: -1}}).fetch();

        return history;
    }
});


