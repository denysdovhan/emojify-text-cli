# emojify-text-cli

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Command line interface to emojify-text

## Install

    npm install --save emojify-text-cli

## Usage

```js
import { emojifyTextCli, emojifyTextCliAsync } from 'emojify-text-cli';

emojifyTextCli('unicorns'); // unicorns
emojifyTextCliAsync('unicorns')
  .then(result => console.log(result)); // unicorns
```

## API

### emojifyTextCli(input, [options])

### emojifyTextCliAsync(input, [options])

Return a promise that resolves to `result`.

#### input

*Required*  
Type: `String`

Lorem ipsum.

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.

## License

MIT © [Denys Dovhan](http://denysdovhan.com)

[npm-url]: https://npmjs.org/package/emojify-text-cli
[npm-image]: https://img.shields.io/npm/v/emojify-text-cli.svg?style=flat-square

[travis-url]: https://travis-ci.org/denysdovhan/emojify-text-cli
[travis-image]: https://img.shields.io/travis/denysdovhan/emojify-text-cli.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/denysdovhan/emojify-text-cli
[coveralls-image]: https://img.shields.io/coveralls/denysdovhan/emojify-text-cli.svg?style=flat-square

[depstat-url]: https://david-dm.org/denysdovhan/emojify-text-cli
[depstat-image]: https://david-dm.org/denysdovhan/emojify-text-cli.svg?style=flat-square
