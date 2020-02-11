import jwt from 'jsonwebtoken'
import ApiClient from './external-api'
import { generateRows } from './mock'
const externalAPI = new ApiClient()
// Return current token
const getToken = req => {
	const { authorization } = req.headers
	return authorization ? authorization.replace(/^Bearer\s/, '') : null
}
export default server => {
	const jwtSecret = 'shhhhh'
	const app = server.getApp()
	/**
	 * Login route
	 */
	app.post('/api/login', (req, res) => {
		const { username } = req.body
		if (!username) {
			return res.status(400).send({
				error: 'No username',
			})
		}
		return res.send({
			token: jwt.sign({ username }, jwtSecret),
			user: {
				username,
				logged: true,
			},
		})
	})
	/**
	 * Return current logged profile
	 */
	app.get('/api/profile', (req, res) => {
		const token = getToken(req)
		try {
			if (token && jwt.verify(token, jwtSecret)) {
				const { username } = jwt.decode(token)
				return res.send({
					username,
					logged: true,
				})
			}
		} catch (err) {
			// ...
		}
		return res.send({
			logged: false,
		})
	})
	/**
	 * Data route: return public data
	 */
	app.get('/api/public', async(req, res) => {
		return res.send(generateRows(3))
	})
	/**
	 * Data route: return external API public data
	 */
	app.get('/api/external', async(req, res) => {
		const data = await externalAPI.getNews()
		return res.send(data)
	})
	/**
	 * Private data: return restricted to logged users data
	 */
	app.get('/api/private', (req, res) => {
		const token = getToken(req)
		let username = null
		try {
			if (token && jwt.verify(token, 'shhhhh')) {
				const data = jwt.decode(token)
				username = data.username
			}
		} catch (err) {
			// ...
		}
		if (!username) {
			return res.send({ error: 'Bad token' }, 403)
		}
		return res.send(generateRows(3))
	})
}
