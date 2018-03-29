const http = require('http');

const init = (app) => {
  const server = http.createServer(app);
  const port = process.env.NODE_PORT || 3000;
  server.listen(port, () => {
    console.log(`[SERVER] Running on ${port}`);
  });
  return server;
};

module.exports = init;
