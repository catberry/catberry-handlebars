'use strict';

class TemplateProvider {

	/**
	 * Creates new instance of Handlebars template provider.
	 * @param {ServiceLocator} locator Locator to resolve dependencies.
	 * @constructor
	 */
	constructor(locator) {
		this._handlebars = locator.resolve('handlebars');
		this._templates = Object.create(null);
	}

	/**
	 * Registers compiled (precompiled) Handlebars template.
	 * http://handlebarsjs.com/reference.html
	 * @param {string} name Template name.
	 * @param {string} compiled Compiled template source.
	 */
	registerCompiled(name, compiled) {

		/* eslint no-new-func: 0 */
		const specs = new Function(`return ${compiled};`);
		this._templates[name] = this._handlebars.template(specs());
	}

	/**
	 * Renders template with specified data.
	 * @param {string} name Name of template.
	 * @param {Object} data Data context for template.
	 * @returns {Promise<string>} Promise for rendered HTML.
	 */
	render(name, data) {
		if (!(name in this._templates)) {
			return Promise.reject(new Error(
				`"${name}" not found among registered templates`
			));
		}

		var promise;
		try {
			promise = Promise.resolve(this._templates[name](data));
		} catch (e) {
			promise = Promise.reject(e);
		}
		return promise;
	}
}

module.exports = TemplateProvider;
