'use strict';

const handlebars = require('./lib/handlebars');
const TemplateProvider = require('./lib/TemplateProvider');

module.exports = {
	register(locator) {
		locator.registerInstance('handlebars', handlebars);
		locator.register('templateProvider', TemplateProvider, true);
	},
	handlebars,
	TemplateProvider
};
