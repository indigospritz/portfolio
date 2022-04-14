const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('src/projects.json')
const middlewares = jsonServer.defaults({ static: "./build" })
const port = process.env.PORT || 5000

server.use(middlewares)
server.use(router)

server.listen(port)

console.log('server started ' + port);