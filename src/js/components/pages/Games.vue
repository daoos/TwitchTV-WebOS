<style lang="scss" scoped>

</style>

<template>

	<div class="row">
		<div class="col s12 m4 l3" v-for="(game,index) in games" :key="game.game._id" :index="index">
			<div class="card" @click.prevent="openGame(game)" :tabindex="3 + index">
				<div class="card-image">
					<img :src="game.game.box.large" />
					<span class="card-title">{{ game.game.localized_name }}</span>
				</div>
				<div class="card-content">
					<p>
						<span><b>{{ game.channels }}</b> channels</span>,
						<span><b>{{ game.viewers }}</b> viewers</span>
					</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script lang="js">
	import { mapGetters } from 'vuex'
	export default {
		name: 'Games',
		data () {
			return {
				//
			}
		},
		computed: {
			...mapGetters([
				'gamesLoading',
				'games',
				'hasGames'
			])
		},
		mounted () {
			this.$store.dispatch('getGames')
		},
		methods: {
			openGame (game) {
				var gameId = encodeURIComponent(game.game.name) // game.game._id
				this.$router.push('/channels/' + gameId)
			}
		}
	}
</script>
