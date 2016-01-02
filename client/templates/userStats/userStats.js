if (Meteor.isClient) {
  Template.userStats.events({
    'submit form': function(event, template) {
      event.preventDefault();
      var gender = template.find('#sMale').value;
      if (gender === "on") {
        gender = "male";
      } else {
        gender = "female";
      }
      var weight = template.find('#sWeight').value;
      var weightUnit = template.find('#sLbs').value;
      if (weightUnit === "on") {
        weightUnit = "lbs";
      } else {
        weightUnit = "kg";
      }
      if (gender == null || gender == "" || weight == null || weight == "" || weightUnit == null || weightUnit == "") {
        alert("Every field must be filled; try again.");
        return false;
      } else {

        $('#weight').val('');

        Meteor.call("saveUserStats", Meteor.userId(), gender, weight, weightUnit);
        Materialize.toast("Now we know! (Everything...)", 4000, 'rounded');
      }
    }
  });
}