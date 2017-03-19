'use strict';

const BrowserTemplateProvider = require('../browser/TemplateProvider');

class TemplateProvider extends BrowserTemplateProvider {

	/**
	 * Determines if the template provider can compile the template.
	 * @param {string} filename Absolute path to the template file.
	 * @param {string} templateString Template content.
	 * @returns {boolean} true if the provider is able to compile the template.
	 */
	isTemplateSupported(filename, templateString) {
		return /(\.hbs|\.handlebars)$/i.test(filename);
	}

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
