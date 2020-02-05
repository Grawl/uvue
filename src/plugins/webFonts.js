export default {
	beforeCreate() {
		if (process.client) {
			import('webfontloader').then(WebFont => {
				WebFont.load({
					custom: {
						families: [
							'Nunito:n3,n4,n7',
						],
						urls: [
							'https://fonts.googleapis.com/css?family=Nunito:300,400,700&display=swap',
						],
					},
				})
			})
		}
	},
}
