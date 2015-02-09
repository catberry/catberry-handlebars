#Catberry Handlebars Adapter

[![NPM](https://nodei.co/npm/catberry-handlebars.png)](https://nodei.co/npm/catberry-handlebars/)

It is an adapter for [Handlebars](http://handlebarsjs.com/) template engine
that makes possible to use it from [Catberry](https://github.com/catberry/catberry) application.

##Usage
You can use the adapter like this in ./browser.js or ./server.js.
Actually, [Catberry CLI](https://github.com/catberry/catberry-cli) does it for you.

```javascript
var handlebars = require('catberry-handlebars'),
	cat = catberry.create(config);
handlebars.register(cat.locator);
```

##Contribution
If you have found a bug, please create pull request with [mocha](https://www.npmjs.org/package/mocha) 
unit-test which reproduces it or describe all details in an issue if you can not
implement test. If you want to propose some improvements just create an issue or
a pull request but please do not forget to use `npm test` to be sure that your
code is awesome.

All changes should satisfy this [Code Style Guide](https://github.com/catberry/catberry/blob/4.0.0/docs/code-style-guide.md).

Also your changes should be covered by unit tests using [mocha](https://www.npmjs.org/package/mocha).

Denis Rechkunov <denis.rechkunov@gmail.com>