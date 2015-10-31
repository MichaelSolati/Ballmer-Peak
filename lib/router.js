Router.configure({
	'layoutTemplate': "layout"
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