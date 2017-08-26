<style lang="scss" scoped>

</style>

<template>

	<div class="row">
		<h4 v-if="game">{{ game }}</h4>
		<div class="col s12 m4 l3" v-for="(channel, index) in channels" :key="channel._id" :index="index">
			<div class="card" @click.prevent="openChannel(channel)" :tabindex="3 + index">
				<div class="card-image">
					<img :src="channel.preview.large" />
					<span class="card-title">{{ channel.channel.name }}</span>
				</div>
				<div class="card-content">
					<p class="truncate" v-if="!game"><b>{{ channel.channel.game }}</b></p>
					<p class="truncate">{{ channel.channel.status }}</p>
					<p class="truncate"><small>({{ channel.viewers }} viewers)</small></p>
				</div>
			</div>
		</div>
	</div>

</template>

<script lang="js">
	import { mapGetters } from 'vuex'
	export default {
		name: 'Channels',
		data () {
			return {
				game: null
			}
		},
		computed: {
			...mapGetters([
				'channelsLoading',
				'channels',
				'hasChannels'
			])
		},
		mounted () {
			var gameId = this.$route.params.gameid || null
			this.game = gameId
			this.$store.dispatch('getChannels', gameId)
		},
		methods: {
			openChannel (channel) {
				var channelId = channel.channel.name
				this.$router.push('/stream/' + channelId)
			}
		}
	}
</script>
