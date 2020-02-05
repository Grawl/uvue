<template lang='pug'>
	.main-menu
		ul(:class='{ active }')
			mixin item
				li.page-link
					block
			+item
				router-link(to='/' exact @click.native='onClickLink')
					span.text Home
			+item
				router-link(to='/vuex' @click.native='onClickLink')
					span Vuex
			+item
				router-link(to='/spa' @click.native='onClickLink')
					span SPA page
			+item
				router-link(to='/not-found' @click.native='onClickLink')
					span Not found
			+item
				router-link(to='/server-error' @click.native='onClickLink')
					span Server error
			+item
				router-link(to='/error' @click.native='onClickLink')
					span Error
			+item
				router-link(to='/private' @click.native='onClickLink')
					span Private
			+item
				router-link(to='/profile' @click.native='onClickLink')
					span {{ isLogged ? 'My profile' : 'Login' }}
		button.mobile-menu-button.btn(type='button' @click='active = !active') Menu
</template>
<script>
export default {
	data: () => ({
		active: false,
	}),
	computed: {
		isLogged() {
			return this.$store.state.user.logged
		},
	},
	methods: {
		onClickLink() {
			this.active = false
		},
	},
}
</script>
<style lang='stylus' scoped>
@import '../index.styl'
.main-menu
	position: fixed
	z-index: 1
	top: 0
	left: 0
	right: 0
	height: 11rem
	background: white
	padding: 3rem
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1)
	+range-10()
		height: 6rem
		padding: 0
.mobile-menu-button
	display: none
	+range-10()
		position: absolute
		z-index: 101
		top: 1rem
		right: 1rem
		display: block
		margin: 0
		padding: 0.5rem 1.5rem
img
	max-height: 6rem
	margin-top: -2rem
ul
	list-style: none
	padding: 0
	margin: 0
	display: flex
	justify-content: center
	+range-10()
		position: fixed
		top: 0
		right: 0
		bottom: 0
		left: 0
		z-index: 100
		display: none
		padding-top: 7rem
		background: white
	&.active
		+range-10()
			display: block
li
	list-style: none
	padding: 0
	margin: 0
	+range-10()
		text-align: center
		display: block
	a
		font-size: 1.8rem
		color: hsl(0, 0%, 60%)
		text-decoration: none
		display: inline-block
		padding: 0.5rem 1rem
		margin: 0.5rem
		transition: all 0.2s ease-out
		transition-property: color, opacity
		+range-10()
			font-size: 2.4rem
			display: block
		span
			display: inline-block
			&::after
				content: ''
				display: block
				height: 2px
				background: hsl(158, 100%, 34%)
				transform: scaleX(0)
				transform-origin: 0 100%
				transition: transform 0.2s ease-out
		&.logo-hover:hover,
		a.logo-hover:focus,
		&.logo-hover:active
			opacity: 0.8
		&:hover:not(.logo-hover),
		a:focus:not(.logo-hover),
		&:active:not(.logo-hover),
		&.router-link-exact-active,
		&.router-link-active
			color: hsl(0, 0%, 27%)
			span
				&::after
					transform: scaleX(1)
</style>
