const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 1076; // Use PORT from Render or default to 8080

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
});
