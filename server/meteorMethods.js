Meteor.methods({
    'logDrink': function(user, drink, alcohol, volume, date) {
        DrinkLog.insert({
            'User': user,
            'Drink': drink,
            'Alcohol': alcohol,
            'Volume': volume,
            'epoch': Date.now(),
            'Date': date
        })
    },
    'logBAC': function(bac) {
        if (BAC.findOne({
                User: this.userId
            }) === undefined) {
            BAC.insert({
                'User': this.userId,
                'BAC': bac,
                'epoch': Date.now()
            })
        } else {
            BAC.update({
                User: this.userId
            }, {
                $set: {
                    'BAC': bac,
                    'epoch': Date.now()
                }
            })
        }
    },
});