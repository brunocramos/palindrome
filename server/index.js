const dotenv = require('dotenv');
const app = require('./src/app');
const server = require('./src/server');

const dotenvBootstrap = dotenv.config();
if (dotenvBootstrap.error) {
  console.error('[SETUP NEEDED] Please, provide a .env file from .env.default template.');
  process.exit(1);
}

// Bootstrap
const newApp = app();
server(newApp);

