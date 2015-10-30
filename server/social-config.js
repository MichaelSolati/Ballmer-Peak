// Deployed Social Config
// Set up login services
Meteor.startup(function() {
  // Remove configuration entries in case service is already configured
  ServiceConfiguration.configurations.remove({
    $or: [{
      service: "facebook"
    }, {
      service: "google"
    }, {
      service: "twitter"
    }]
  });
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: "880217695367546",
    secret: "203ca21587b7996aea9335ac56089d88",
    loginStyle: "popup"
  });
  // Add Google configuration entry
  ServiceConfiguration.configurations.insert({
    service: "google",
    clientId: "468900608227-9udjl2d767d0riv5js82m8mcrttdkbt2.apps.googleusercontent.com",
    secret: "sRwD4BBUr1Pdkjf-tdR7B0oc",
    loginStyle: "popup"
  });
  // Add Twitter configuration entry
  ServiceConfiguration.configurations.insert({
    service: "twitter",
    consumerKey: "Yp99F8XiEfM1GrOJcRE5knlH7",
    secret: "9A3Ob77LAWds0sDVHwCatnePxGL3ZcxpkmJsvq5GeKqhLAzkg1",
    loginStyle: "popup"
  });
});
// Handle merge of application specific DB items
Meteor.methods({
  mergeItems: function(mergedUserId) {
    console.log('Merging DB items of user', mergedUserId, 'with user', Meteor.userId());
  }
});