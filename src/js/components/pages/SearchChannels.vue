<style lang="scss" scoped>

</style>

<template>

	<p>SearchChannels</p>

</template>

<script lang="js">
	import { mapGetters } from 'vuex'
	export default {
		name: 'SearchChannels',
		data () {
			return {
				//
			}
		},
		computed: {
			...mapGetters([
				'searchChannelsLoading',
				'searchChannels',
				'hasSearchChannels'
			])
		},
		mounted () {

		},
		methods: {
			openStream (channel) {
				this.$router.push('/stream') // TODO :params
			}
		}
	}
</script>
