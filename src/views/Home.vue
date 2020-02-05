<template lang='pug'>
	.home
		.flex
			.logo
				img(
					alt='UVue'
					src='@/assets/logo.png'
					width=200
					height=200
				)
			.titles
				h1 UVue
				h2 Create Vue universal applications with ease
		.text-links
			| Welcome to the UVue demo website! The purpose of this website is to show some features of this
			| Vue package. UVue is a Vue CLI plugin to build server side rendered applications easly.
			.links
				mixin link(title, href)
					a.btn(
						rel='noreferrer noopener'
						href=href
						target='_blank'
					)=title
				+link('Source code', 'https://github.com/Grawl/uvue')
				+link('Documentation', 'https://universal-vue.github.io/docs')
				+link('Github repo', 'https://github.com/universal-vue/uvue')
		RowsList(:rows='rows')
</template>
<script>
import RowsList from '@/components/RowsList'
import { homeEffects } from '@/effects'
export default {
	mixins: {
		homeEffects,
	},
	components: {
		RowsList,
	},
	async asyncData({ $http }) {
		const { data: rows } = await $http.get('/api/public')
		return {
			rows,
		}
	},
}
</script>
<style lang='stylus' scoped>
@import '../index.styl'
.home
	height: auto
	max-width: 70rem
	margin: 6rem auto
.flex
	display: flex
	+range-6()
		display: block
.logo
	+range-6()
		padding: 0 6rem
		text-align: center
h1,
h2
	+range-6()
		padding: 0 6rem
		text-align: center
h1
	margin-top: 4rem
	color: darken(hsl(158, 100%, 34%), 10%)
h2
	color: hsl(0, 0%, 27%)
	margin-bottom: 4rem
.text-links
	padding: 3rem
	font-size: 1.7rem
	line-height: 1.6
.links
	padding-top: 6rem
	display: flex
	justify-content: center
	+range-6()
		display: block
	a
		+range-6()
			text-align: center
			display: block
</style>
