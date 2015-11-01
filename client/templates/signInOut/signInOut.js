if (Meteor.isClient) {
  Meteor.subscribe("accountsMerged");
  // Simply 'inherites' helpers from AccountsTemplates
  Template.signInOut.helpers(AccountsTemplates.atFormHelpers);
  Template.signInOut.events({
    'click #signOut': function(event) {
      $('#signInOutModal').closeModal();
      Meteor.logout(function(err) {
        if (err) {
          throw new Meteor.Error("Logout failed");
          Materialize.toast('There Might Be An Issue...', 3000, 'rounded');
        } else {
          Materialize.toast('Sucessfully Signed Out!', 3000, 'rounded');
        }
      });
      window.location.replace("/");
    },
    'click #at-facebook': function(event) {
      $('#signInOutModal').closeModal();
      setTimeout(function() {
        if (Meteor.user()) {
          Materialize.toast('Signed In With Facebook!', 3000, 'rounded');
        } else {
          Materialize.toast('There Might Be An Issue...', 3000, 'rounded');
        }
      }, 5000);
    },
    'click #at-google': function(event) {
      $('#signInOutModal').closeModal();
      setTimeout(function() {
        if (Meteor.user()) {
          Materialize.toast('Signed In With Google!', 3000, 'rounded');
        } else {
          Materialize.toast('There Might Be An Issue...', 3000, 'rounded');
        }
      }, 5000);
    },
    'click #at-twitter': function(event) {
      $('#signInOutModal').closeModal();
      setTimeout(function() {
        if (Meteor.user()) {
          Materialize.toast('Signed In With Twitter!', 3000, 'rounded');
        } else {
          Materialize.toast('There Might Be An Issue...', 3000, 'rounded');
        }
      }, 8000);
    },
    // Merge Facebook login service
    'click button#merge-facebook': function(e) {
      Meteor.signInWithFacebook({}, function(error, mergedUserId) {
        if (error) {
          console.log('error', error);
        }
        // mergedUserId is set if a merge occured
        if (mergedUserId) {
          console.log(mergedUserId, 'merged with', Meteor.userId());
          Meteor.call('mergeItems', mergedUserId, function(error, result) {
            if (error) {
              console.log('error', error);
              alert('error');
            }
            if (result) {
              console.log('result', result);
            }
          });
        }
      });
      e.preventDefault();
    },
    // Merge Google login service
    'click button#merge-google': function(e) {
      Meteor.signInWithGoogle({}, function(error, mergedUserId) {
        if (error) {
          console.log('error', error);
        }
        // mergedUserId is set if a merge occured
        if (mergedUserId) {
          console.log(mergedUserId, 'merged with', Meteor.userId());
          Meteor.call('mergeItems', mergedUserId, function(error, result) {
            if (error) {
              console.log('error', error);
            }
            if (result) {
              console.log('result', result);
            }
          });
        }
      });
      e.preventDefault();
    },
    // Merge Twitter login service
    'click button#merge-twitter': function(e) {
      Meteor.signInWithTwitter({}, function(error, mergedUserId) {
        if (error) {
          console.log('error', error);
        }
        // mergedUserId is set if a merge occured
        if (mergedUserId) {
          console.log(mergedUserId, 'merged with', Meteor.userId());
          Meteor.call('mergeItems', mergedUserId, function(error, result) {
            if (error) {
              console.log('error', error);
            }
            if (result) {
              console.log('result', result);
            }
          });
        }
      });
      e.preventDefault();
    }
  });
}