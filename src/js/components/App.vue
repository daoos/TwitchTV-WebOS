<style lang="scss" scoped>

</style>

<template>
	<main id="app">

		<div class="row">

			<div class="col s4 m3 l2 sidebar">
				<div class="collection with-header">
					<div class="collection-header" @click.prevent="reloadApp()" tabindex="1">
						<h4><img class="responsive-img" src="dist/img/twitch_logo.png"/></h4>
					</div>
					<router-link :to="{ name: 'Games' }" class="collection-item" tabindex="2">Games</router-link>
					<router-link :to="{ name: 'Channels' }" class="collection-item" tabindex="3">Channels</router-link>
				</div>
			</div>

			<div class="col s8 m9 l10 view-wrap">
				<!-- Views -->
				<router-view></router-view>
			</div>

		</div>

	</main>
</template>

<script lang="js">
	export default {
		name: 'App',
		data () {
			return {
				//
			}
		},
		computed: {

		},
		mounted () {
			this.$store.dispatch('initTwitch').then((response) => {
				this.$router.push('/games')
			}, (error) => {

			})
		},
		methods: {
			reloadApp () {
				window.location.reload()
			}
		},
		components: {

		}
	}
</script>
