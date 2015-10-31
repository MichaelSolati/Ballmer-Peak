Session.set("currentBAC", 0.0)
$(document).ready(function() {
  $('select').material_select();
});


Template.index.events({
  'click #indexSignIn': function(event) {
    $('#signInOutModal').openModal()
  }
});