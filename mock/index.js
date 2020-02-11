require('dotenv-safe').config({
	allowEmptyValues: true,
})
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const port = process.env.MOCK_PORT || 3300

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.listen(port, () => {
	console.log(`Mock server is running on http://localhost:${port}`)
})

server.get('/api/news', (request, response) => {
	if (request.method === 'GET') {
		const users = require('./news/index')
		response.status(200).jsonp(users())
	}
})
