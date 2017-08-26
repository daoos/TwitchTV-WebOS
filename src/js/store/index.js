import Vue from 'vue'
import Vuex from 'vuex'

import store from 'store'
import { validObject } from '../utils'
import * as api from '../api'

Vue.use(Vuex)

// Mutation types
const types = {
	// Init
	INIT_TWITCH: 'INIT_TWITCH',
	INIT_TWITCH_SUCCESS: 'INIT_TWITCH_SUCCESS',
	INIT_TWITCH_FAIL: 'INIT_TWITCH_FAIL',
	// Search
	SEARCH_CHANNELS: 'SEARCH_CHANNELS',
	SEARCH_CHANNELS_SUCCESS: 'SEARCH_CHANNELS_SUCCESS',
	SEARCH_CHANNELS_FAIL: 'SEARCH_CHANNELS_FAIL',
	// Channels
	GET_CHANNELS: 'GET_CHANNELS',
	GET_CHANNELS_SUCCESS: 'GET_CHANNELS_SUCCESS',
	GET_CHANNELS_FAIL: 'GET_CHANNELS_FAIL',
	// Games
	GET_GAMES: 'GET_GAMES',
	GET_GAMES_SUCCESS: 'GET_GAMES_SUCCESS',
	GET_GAMES_FAIL: 'GET_GAMES_FAIL',
	// Stream
	GET_STREAM: 'GET_STREAM',
	GET_STREAM_SUCCESS: 'GET_STREAM_SUCCESS',
	GET_STREAM_FAIL: 'GET_STREAM_FAIL'
}

// Vuex store
export default new Vuex.Store({
	state: {
		initBusy: false,
		searchChannelsBusy: false,
		searchChannels: [],
		channelsBusy: false,
		channels: [],
		gamesBusy: false,
		games: [],
		streamBusy: false,
		stream: {}
	},
	mutations: {
		[types.INIT_TWITCH] (state) {
			state.initBusy = true
		},
		[types.INIT_TWITCH_SUCCESS] (state, response) {
			state.initBusy = false
		},
		[types.INIT_TWITCH_FAIL] (state, error) {
			state.initBusy = false
		},
		[types.SEARCH_CHANNELS] (state) {
			state.searchChannelsBusy = true
		},
		[types.SEARCH_CHANNELS_SUCCESS] (state, response) {
			state.searchChannelsBusy = false
			console.log(response)
			state.searchChannels = response
		},
		[types.SEARCH_CHANNELS_FAIL] (state, error) {
			state.searchChannelsBusy = false
		},
		[types.GET_CHANNELS] (state) {
			state.channelsBusy = true
		},
		[types.GET_CHANNELS_SUCCESS] (state, response) {
			state.channelsBusy = false
			state.channels = response.data.streams
		},
		[types.GET_CHANNELS_FAIL] (state, error) {
			state.channelsBusy = false
		},
		[types.GET_GAMES] (state) {
			state.gamesBusy = true
		},
		[types.GET_GAMES_SUCCESS] (state, response) {
			state.gamesBusy = false
			state.games = response.data.top
		},
		[types.GET_GAMES_FAIL] (state, error) {
			state.gamesBusy = false
		},
		[types.GET_STREAM] (state) {
			state.streamBusy = true
		},
		[types.GET_STREAM_SUCCESS] (state, response) {
			state.streamBusy = false
			console.log(response)
			state.stream = response
		},
		[types.GET_STREAM_FAIL] (state, error) {
			state.streamBusy = false
		}
	},
	actions: {
		initTwitch: (store) => {
			store.commit(types.INIT_TWITCH)
			return api.initTwitch()
					.then((response) => store.commit(types.INIT_TWITCH_SUCCESS, response),
							(error) => store.commit(types.INIT_TWITCH_FAIL, error))
		},
		searchChannels: (store, query) => {
			store.commit(types.SEARCH_CHANNELS)
			return api.searchChannels(query)
					.then((response) => store.commit(types.SEARCH_CHANNELS_SUCCESS, response),
							(error) => store.commit(types.SEARCH_CHANNELS_FAIL, error))
		},
		getChannels: (store, gameId) => {
			store.commit(types.GET_CHANNELS)
			return api.getChannels(gameId)
					.then((response) => store.commit(types.GET_CHANNELS_SUCCESS, response),
							(error) => store.commit(types.GET_CHANNELS_FAIL, error))
		},
		getGames: (store) => {
			store.commit(types.GET_GAMES)
			return api.getGames()
					.then((response) => store.commit(types.GET_GAMES_SUCCESS, response),
							(error) => store.commit(types.GET_GAMES_FAIL, error))
		},
		getStream: (store, channelId) => {
			store.commit(types.GET_STREAM)
			return api.getStream(channelId)
					.then((response) => store.commit(types.GET_STREAM_SUCCESS, response),
							(error) => store.commit(types.GET_STREAM_FAIL, error))
		}
	},
	getters: {
		initBusy: state => state.initBusy,

		searchChannelsBusy: state => state.searchChannelsBusy,
		hasSearchChannels: state => state.searchChannels.length > 0,
		searchChannels: state => state.searchChannels,

		channelsBusy: state => state.channelsBusy,
		hasChannels: state => state.channels.length > 0,
		channels: state => state.channels,

		gamesBusy: state => state.gamesBusy,
		hasGames: state => state.games.length > 0,
		games: state => state.games,

		streamBusy: state => state.streamBusy,
		hasStream: state => validObject(state.stream, 'id'),
		stream: state => validObject(state.stream, 'id') ? state.stream : {},
	},
	modules: {

	},
	strict: true,
	plugins: []
})
