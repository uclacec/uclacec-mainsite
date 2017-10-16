var keystone = require('keystone');

keystone.init({

	'name': 'UCLA CEC Main Site in React',
	'brand': 'UCLA CEC Main Site in React',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': '4bae8205fa58578345bfbb0feb533c902c090c63aa30f44eeefbdd36afcb6b9991f2b0a381515512ffeb3fd6287dd2d2c1d8a4eebc34c9a487153d03a48787d8',

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users'
});

keystone.start();
