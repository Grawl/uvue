const casual = require('casual')
const images = [
	'https://versiya.info/uploads/posts/2020-01/medium/1580391931_mycollages-2.jpg',
	'https://versiya.info/uploads/posts/2020-01/medium/1580440431_762e9.jpg',
	'https://versiya.info/uploads/posts/2020-01/medium/1580449435_novyj-proekt-2.jpg',
	'https://versiya.info/uploads/posts/2020-01/medium/1580443511_rp.jpg',
	'https://versiya.info/uploads/posts/2020-01/medium/1580434977_novyj-proekt-1.jpg',
	'https://versiya.info/uploads/posts/2020-01/medium/1580419278_v_dvukh_shkolakh_kopeyska_obyavlen_karantin_v_drugikh_zakryvayut_otdelnye_klassy.jpg',
	'https://versiya.info/uploads/posts/2020-01/medium/1580403895_5cfac4d711e2053cc376876b-750-375.jpg',
]
module.exports = () => {
	casual.define('article', () => ({
		id: casual.uuid,
		author: casual.full_name,
		title: casual.sentence,
		published: casual.date('MM-DD-YYYY'),
		created_at: casual.date('MM-DD-YYYY'),
		body: casual.text,
		image: casual.random_element(images),
	}))
	const data = []
	// Create 100 news
	for (let i = 0; i < 10; i++) {
		data.push(casual.article)
	}
	return data
}
