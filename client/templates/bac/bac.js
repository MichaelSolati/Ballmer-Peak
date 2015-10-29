$(document).ready(function() {
    $('select:not([multiple])').material_select();
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
    Session.set("currentBAC", (BAC+Session.get("currentBAC")));
    Materialize.toast("Enjoy that "+Drink+"!");
    if (Session.get("currentBAC") >= 0.129 && Session.get("currentBAC") <= 0.138){
      $("#inDaZone").text("You're In The Zone!");
    } else {
      $("#inDaZone").text("You're Not In The Zone!");
    }
    $("#currentBAC").text(Session.get("currentBAC")+" (Current BAC)");

  }
});