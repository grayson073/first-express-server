/* eslint no-console: off */
require('dotenv').config();
const { createServer } = require('http');
require('./lib/mongodb');
const app = require('./lib/app');

const PORT = process.env.PORT || 3000;
const server = createServer(app);

server.listen(PORT, () => {
    console.log('Server is running on', server.address().port);
});