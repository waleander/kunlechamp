'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server(+process.env.PORT, '0.0.0.0');
server.connection({port: 3000, host: 'localhost'});
server.bind({
  apiBaseUrl: 'http://localhost:4000/api',
  WebBaseUrl: 'http://localhost:4000'
});




server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route(require('./routes.js'));
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
