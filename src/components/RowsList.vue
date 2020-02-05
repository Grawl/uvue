<template lang='pug'>
	.rows-list
		.item(v-for='(row, index) in rows' :key='index')
			.picture
				img(
					:src='row.picture'
				)
			.texts
				h2 {{ row.title }}
				p {{ row.text }}
</template>
<script>
export default {
	props: {
		rows: {
			type: Array,
			default: () => [],
		},
	},
}
</script>
<style lang='stylus' scoped>
@import '../index.styl'
.rows-list
	margin-top: 6rem
.item
	padding-bottom: 4rem
	display: flex
	+range-10()
		display: block
.picture
	height: 19.2rem
	min-width: 25.6rem
	background: hsl(0, 0%, 80%)
	margin-right: 3rem
	+range-10()
		margin-bottom: 2rem
		text-align: center
		background: transparent
img
	max-width: 25.6rem
	margin: 0
h2
	color: hsl(0, 0%, 60%)
	&::after
		content: ''
		display: block
		height: 2px
		background: hsl(158, 100%, 34%)
		border-radius: 4px
		width: 10rem
		margin: 1rem 0 3rem 0
</style>
