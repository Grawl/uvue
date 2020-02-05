<template lang='pug'>
	.page
		h1 {{ title }}
		.page__content
			slot/
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
}
</script>
<style lang='stylus' scoped>
.page
	box-sizing: content-box
	max-width: 65rem
	margin: auto
	padding: 3rem 6rem
h1
	font-weight: 100
	&::after
		content: ''
		display: block
		height: 2px
		background: hsl(158, 100%, 34%)
		border-radius: 4px
		width: 10rem
		margin: 1rem 0 3rem 0
		transform-origin: 0 50%
		transform: scaleX(0)
		transition: transform 0.3s ease-out
	&.shown
		&::after
			transform: scaleX(1)
</style>
