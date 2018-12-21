'use strict';

module.exports = app => {
    const defaultConfig = {
        debug: app.config.env !== 'prod',
        pool: {min: 0, max: 7},
        log: {
            info(message) {

                logging(app.logger, 'info', message);
            },
            warn(message) {
                logging(app.logger, 'warn', message);
            },
            error(message) {
                logging(app.logger, 'error', message);
            },
            deprecate(message) {
                logging(app.logger, 'warn', message);
            },
            debug(message) {
                logging(app.logger,'info', message);
            },
        }
    };
    const config = Object.assign({}, defaultConfig, app.config.knex);
    if (config.client === 'sqlite3') {
        config.useNullAsDefault = false;
    }
    // support customize knex
    const Knex = config.Knex || require('knex');
    app.knex = Knex(config);

    function logging(logger, level, message) {
        if (typeof message === 'object') {
            if (message.sql){
                logger[level](`[egg-knex] sql: %s; bindings: %s`, message.sql, JSON.stringify(message.bindings));
            }else {
                logger[level](`[egg-knex] %s`, JSON.stringify(message));
            }
        } else {
            logger[level](`[egg-knex] %s`, message);
        }
    }
};
