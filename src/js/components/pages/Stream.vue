<style lang="scss" scoped>
.row {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	> .col {
		margin: 0;
		padding: 0;
		height: 100%;
		> * {
			height: 100%;
		}
	}
}
video {
	width: 100%;
	height: 100%;
}
</style>

<template>

	<div class="row">
		<div class="col s12 m12 l9">
			<!--twitch-player :channel="channelId" :width="videoWidth" :height="videoHeight"></twitch-player-->
			<video crossorigin="anonymous">
				<p>HTML5 player not supported!</p>
				<source :src="'https://player.twitch.tv/?channel='+channelId+'&html5=1'"></source>
			</video>
		</div>
		<div class="col s12 m12 l3">
			<twitch-chat :channel="channelId" :width="chatWidth" :height="chatHeight"></twitch-chat>
		</div>
	</div>

</template>

<script lang="js">
	import { mapGetters } from 'vuex'
	import VueTwitchPlayer from 'vue-twitch-player'
	import VueTwitchChat from 'vue-twitch-chat'

	export default {
		name: 'Stream',
		data () {
			return {
				channelId: this.$route.params.channelid,
				videoWidth: '100%',
				videoHeight: '100%',
				chatWidth: '100%',
				chatHeight: '100%'
			}
		},
		computed: {
			// ...mapGetters([
			// 	'channelsLoading',
			// 	'channels',
			// 	'hasChannels'
			// ])
		},
		mounted () {
			// this.$store.dispatch('getStream', this.channelId)

		},
		methods: {

		},
		components: {
			'twitch-player': VueTwitchPlayer,
			'twitch-chat': VueTwitchChat
		}
	}
</script>
