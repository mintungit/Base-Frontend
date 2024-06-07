const argv = require('./argv');

const port = argv.port || process.env.PORT || '8080';
module.exports = parseInt(port, 10);