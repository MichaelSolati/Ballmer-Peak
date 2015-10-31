if (Meteor.isClient) {
  $(document).ready(function() {
    $('select:not([multiple])').material_select();
  });

  Meteor.subscribe("bac");
  Template.bac.helpers({
    bac: function() {
      Session.set("currentBAC", (BAC.findOne({user:Meteor.userID}).BAC));

      if (Session.get("currentBAC") >= 0.129 && Session.get("currentBAC") <= 0.138){
      $("#inDaZone").text("You're In The Zone!");
    } else if (Session.get("currentBAC") > 0.139) {
      $("#inDaZone").text("You're Drunk, Cool Down...");
    } else if (Session.get("currentBAC") < 0.128){
      $("#inDaZone").text("You're Not In The Zone!");
    }
    if (Session.get("currentBAC") > 0.08){
      $("#drivingWarning").text("In The United States You Are Over The Legal Limit. CALL A TAXI!");
    } else if (Session.get("currentBAC") < 0.08){
      $("#drivingWarning").text("You May Be Safe To Drive...");
    }

    
      return BAC.find({}).fetch();
    },
  });



Template.bac.events({
  'submit form': function(event, template) {
    event.preventDefault();
    var Drink = template.find('#drinkName').value;
    var alcoholPercentage = template.find('#alcoholPercentage').value;
    var volume = template.find('#volume').value;

    
    var gender = template.find('#male').value;
    if (gender === "on") {
      gender = "male";
    } else {
      gender = "female";
    }

    var weight = template.find('#weight').value;
    var weightUnit = template.find('#lbs').value;
    if (weightUnit === "on") {
      weightUnit = "lbs";
    } else {
      weightUnit = "kg";
    }


    var A = alcoholPercentage*(volume/100);
    if (weightUnit === "lbs") {
      var W = weight;
    } else {
      var W = weight*2.20462;
    }
    if (gender === "male") {
      var r = 0.73;
    } else {
      var r = 0.66;
    }
    var BAC = (A*5.14/W*r);

    var epoch = new Date();
    var date = ((epoch.getMonth()+1)+"/"+epoch.getDate()+"/"+epoch.getUTCFullYear());

    Meteor.call("logDrink", Meteor.userId(), Drink, alcoholPercentage, volume, date);
    Meteor.call("logBAC", BAC);
    Materialize.toast("Enjoy that "+Drink+"!", 4000, 'rounded');
    

  }
});
}