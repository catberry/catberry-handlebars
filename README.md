# Catberry Handlebars Adapter

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/catberry/main?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)

It is an adapter for [Handlebars](http://handlebarsjs.com/) template engine
that makes possible to use it from [Catberry](https://github.com/catberry/catberry) application.

## Installation

```bash
npm install catberry-handlebars --save
```

## Usage
You can use the adapter in ./browser.js, ./server.js or ./build.js as following:

```javascript
const handlebars = require('catberry-handlebars');
const cat = catberry.create(config);
handlebars.register(cat.locator);
```

In fact, [Catberry CLI](https://github.com/catberry/catberry-cli) does it for you while generating a project.

## Contributing

There are a lot of ways to contribute:

* Give it a star
* Join the [Gitter](https://gitter.im/catberry/main) room and leave a feedback or help with answering users' questions
* [Submit a bug or a feature request](https://github.com/catberry/catberry-handlebars/issues)
* [Submit a PR](https://github.com/catberry/catberry-handlebars/blob/develop/CONTRIBUTING.md)

Denis Rechkunov <denis@rdner.de>
