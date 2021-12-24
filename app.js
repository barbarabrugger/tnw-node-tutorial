'use strict';

const { flaschenpost } = require('flaschenpost');
const { getApi } = require('./lib/getApi');
const http = require('http');
// const { InMemoryStore } = require('./lib/store/InMemoryStore');
const { MongoDbStore } = require('./lib/store/MongoDbStore');
const { processenv } = require('processenv');

(async () => {
    const logger = flaschenpost.getLogger();

    // const store = new InMemoryStore();
    const store = new MongoDbStore({
        hostname: 'localhost',
        port: 27017,
        database: 'todos',
        username: 'node',
        password: 'node'
    });

    await store.initialize();

    const api = getApi({ store });
    const server = http.createServer(api);

    const port = processenv('PORT', 3000);

    server.listen(port, () => {
        logger.info('Server started.', { port });
    });
})();
