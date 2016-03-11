'use strict';

const BrowserTemplateProvider = require('../browser/TemplateProvider');

class TemplateProvider extends BrowserTemplateProvider {

	/**
	 * Compiles (precompiles) Handlebars template.
	 * http://handlebarsjs.com/reference.html
	 * @param {string} source Template source.
	 * @returns {string} Precompiled source (template specification).
	 */
	compile(source) {
		return this._handlebars.precompile(source);
	}
}

module.exports = TemplateProvider;
