// Local Host Config
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
    "service": "facebook",
    "appId": "880217695367546",
    "secret": "203ca21587b7996aea9335ac56089d88"
  });
  // Add Google configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "google",
    "clientId": "176999018351-b9llgv128o965h3pe9doi6npbdgs3j4t.apps.googleusercontent.com",
    "secret": "tXDH0Zi_VyUC_6BDbnXWo0O_"
  });
  // Add Twitter configuration entry
  ServiceConfiguration.configurations.insert({
    "service": "twitter",
    "consumerKey": "eBqVdRWMQ85vsbfikMWOaPK0O",
    "secret": "r0lvQcegZeOGyprTlbIkLnDSxqH2dlddz7PiFHPauDTmggudgR"
  });
});
// Handle merge of application specific DB items
Meteor.methods({
  mergeItems: function(mergedUserId) {
    console.log('Merging DB items of user', mergedUserId, 'with user', Meteor.userId());
  }
});