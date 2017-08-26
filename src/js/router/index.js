import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../components/pages/Index.vue'
import SearchChannels from '../components/pages/SearchChannels.vue'
import Channels from '../components/pages/Channels.vue'
import Games from '../components/pages/Games.vue'
import Stream from '../components/pages/Stream.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	// hashbang: false,
	// history: true,
	linkActiveClass: 'active',
	routes: [
		{
			name: Index.name,
			path: '/',
			redirect: '/channels'
			// component: Index
		},
		{
			name: SearchChannels.name,
			path: '/search-channels',
			component: SearchChannels
		},
		{
			name: Channels.name,
			path: '/channels/:gameid?',
			component: Channels
		},
		{
			name: Games.name,
			path: '/games',
			component: Games
		},
		{
			name: Stream.name,
			path: '/stream/:channelid',
			component: Stream
		}
	]
})

router.beforeEach(function (to, from, next) {
	window.scrollTo(0, 0)
	$(document).find('.view-wrap').animate({ scrollTop: 0 }, 200)
	next()
})

export default router