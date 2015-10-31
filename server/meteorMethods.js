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
                'displayBAC' : bac,
                'epoch': Date.now()
            })
        } else {
            BAC.update({
                User: this.userId
            }, {
                $set: {
                    'BAC': bac,
                    'displayBAC' : (Math.ceil(bac * 100) / 100),
                    'epoch': Date.now()
                }
            })
        }
    },
    'timeBAC': function() {
        var bac = BAC.findOne({user:this.userID}).BAC;
        var time = BAC.findOne({user:this.userID}).epoch;
        var currentTime = Date.now();
        var timeDiff = currentTime - time;
        var currentBAC = bac - (0.00000000416666667*timeDiff);

        if (currentBAC < 0) {
            currentBAC = 0;
        }

        BAC.update({
                User: this.userId
            }, {
                $set: {
                    'BAC': currentBAC,
                    'displayBAC' : (Math.ceil(bac * 100) / 100),
                    'epoch': currentTime
                }
            })
    },
});