# egg-knex

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-knex-promise.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-knex-promise
[travis-image]: https://travis-ci.com/hankexu/egg-knex.svg?branch=master
[travis-url]: https://travis-ci.com/hankexu/egg-knex
[codecov-image]: https://img.shields.io/codecov/c/github/hankexu/egg-knex.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/hankexu/egg-knex
[snyk-image]: https://snyk.io/test/github/hankexu/egg-knex/badge.svg?targetFile=package.json
[snyk-url]: https://snyk.io/test/github/hankexu/egg-knex?targetFile=package.json
[download-image]: https://img.shields.io/npm/dm/egg-knex-promise.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/egg-knex-promise

knex plugin for egg

## Install

```bash
$ npm i egg-knex-promise --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.knex = {
  enable: true,
  package: 'egg-knex-promise',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.knex = {
      client: 'sqlite3',
      connection: {
        filename: './test.db3',
      },
};
```

see [Knex.js](https://knexjs.org/) for more detail.

## Example
```js
// {app_root}/controller/home.js
class HomeController extends Controller {
    async index() {
        const data = await this.app.knex('user').select('*');
        this.ctx.body = data;
    }
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
