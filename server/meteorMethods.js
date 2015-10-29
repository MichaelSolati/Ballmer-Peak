Meteor.methods({
    'logDrink': function(user, drink, alcohol, volume){
    	DrinkLog.insert({
            'User': user,
            'Drink': drink,
            'Alcohol': alcohol,
            'Volume': volume,
            'Date': Date.now()
        })
        console.log("Logging Drink");
    }
});