'use strict';

/**
 * egg-knex default config
 * @member Config#knex
 * @property {String} SOME_KEY - some description
 */
exports.knex = {
  client: 'sqlite3',
  connection: {
    filename: './test.db3',
  },
};
