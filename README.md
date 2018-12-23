# egg-knex

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-knex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-knex
[travis-image]: https://img.shields.io/travis/eggjs/egg-knex.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-knex
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-knex.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-knex?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-knex.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-knex
[snyk-image]: https://snyk.io/test/npm/egg-knex/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-knex
[download-image]: https://img.shields.io/npm/dm/egg-knex.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-knex

<!--
Description here.
-->

## Install

```bash
$ npm i egg-knex-promise --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.knex = {
  enable: true,
  package: 'egg-knex',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.knex = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
