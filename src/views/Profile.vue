<template lang='pug'>
	PageLayout(:title='title')
		//- If user is not logged: display a login form -->
		form(
			v-if='!user.logged'
			@submit.prevent='onSubmit'
		)
			.notif.info(v-if='redirected') You have been redirected by a middleware!
			.notif.error(v-if='error' v-html='error')
			.txtcenter
				label(for='username') Enter you username:
				br
				input#username(type='text' v-model='form.username')
				br
				button.btn(type='submit') Login
		//- Otherwise: display a simple welcome page with some links -->
		div(v-else)
			p You are now logged!
			router-link.btn(to='/private') Go to private page
			button.btn(@click='onLogout') Logout
</template>
<script>
import PageLayout from '@/components/PageLayout'
import { pageEnterEffect } from '@/effects'
// FIXME if you visit this /profile route and reload, you will see only `{"logged": false}`
export default {
	mixins: [pageEnterEffect],
	components: {
		PageLayout,
	},
	data() {
		return {
			error: null,
			form: {
				username: '',
			},
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		title() {
			return this.user.logged ? `Welcome ${this.user.username}!` : 'Login'
		},
		redirected() {
			return Boolean(this.$route.query.from)
		},
	},
	methods: {
		async onSubmit() {
			try {
				this.error = null
				await this.$store.dispatch('login', this.form.username)
				if (this.$route.query.from) {
					this.$router.push(this.$route.query.from)
				}
			} catch (err) {
				this.error = err.message
			}
		},
		async onLogout() {
			await this.$store.dispatch('logout')
		},
	},
}
</script>
<style lang='stylus' scoped>
.txtcenter
	text-align: center
label
	font-weight: 700
	padding: 2rem
	display: inline-block
input
	padding: 1rem 2rem
	border: 1px solid hsl(0, 0%, 80%)
	border-radius: 0.8rem
</style>
