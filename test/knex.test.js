'use strict';

const mock = require('egg-mock');

describe('test/knex.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/knex-test',
    });
    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, knex')
      .expect(200);
  });
});
