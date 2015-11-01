Router.configure({
	layoutTemplate: "layout",
	notFoundTemplate: "notFound"
});
Router.route('/', {
	name: 'index'
});
Router.route('/drink-history', {
	name: 'drinkHistory'
});
Router.route('/admin-panel', {
	name: 'adminPanel'
});