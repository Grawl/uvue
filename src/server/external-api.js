import fetch from 'isomorphic-fetch'
export default class ApiClient {
	constructor() {
		this.base = process.env.VUE_APP_EXTERNAL_API_URL
	}
	async get(url) {
		const request = await fetch(new URL(url, this.base).href)
		return request.json()
	}
	async getNews() {
		return this.get('/api/news')
	}
}
