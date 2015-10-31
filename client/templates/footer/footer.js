if (Meteor.isClient) {
    Template.footer.events({
    'click #bug': function(event, template) {
        var overlay = document.getElementsByClassName('bugtracker-overlay');
        if (overlay) {
            overlay = overlay[0];
        } else {
            console.error('There is no bugtrackerForm in your page!');
            return;
        }
        if (overlay.style.display === 'none') {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    }
});
}