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
    clientId: "1054463848701-92aieqbtaflhl20o4tlaiaquaqsh8mi7.apps.googleusercontent.com",
    secret: "r5JQOwHSBBGoZvK6DEs94PIU",
    loginStyle: "popup"
  });
  // Add Twitter configuration entry
  ServiceConfiguration.configurations.insert({
    service: "twitter",
    consumerKey: "vWS7uLTWZiSB0IHfi25d7dMqP",
    secret: "OyfOy9vZoe5UglGD3HIfzLgfH1sWSrBMaXaGEUIfUX5c92ECkd",
    loginStyle: "popup"
  });
});
// Handle merge of application specific DB items
Meteor.methods({
  mergeItems: function(mergedUserId) {
    console.log('Merging DB items of user', mergedUserId, 'with user', Meteor.userId());
  }
});