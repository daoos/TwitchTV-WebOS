import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

// Set up http config
// Vue.http.headers.common['Accept'] = 'application/json'
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.headers.common['Access-Control-Request-Method'] = 'GET'
Vue.http.options.root = 'https://api.twitch.tv/kraken'
// Vue.http.options.emulateJSON = true

var client_id = '7kmueye6fr77dsz1s48bggxocqt75c'

export function initTwitch () {
	// TODO ?
	return new Promise((resolve, reject) => {
		// reject(flase)
		resolve(true)
	})
}

export function searchChannels (query = '') {
	var options = {
		params: {
			client_id,
			query
		}
	}
	return Vue.http.get('channels/search', options)
					.then((response) => Promise.resolve(response),
							(error) => Promise.reject(error))
}

export function getChannels (gameId) {
	var options = {
		params: {
			client_id,
			game: gameId
			// limit: 4
		}
	}
	return Vue.http.get('streams', options)
					.then((response) => Promise.resolve(response),
							(error) => Promise.reject(error))
}

export function getGames () {
	var options = {
		params: {
			client_id
		}
	}
	return Vue.http.get('games/top', options)
					.then((response) => Promise.resolve(response),
							(error) => Promise.reject(error))
}

export function getStream (channelId) {
	var options = {
		params: {
			client_id,
			channel_id: channelId
		}
	}
	return Vue.http.get('stream', options)
					.then((response) => Promise.resolve(response),
							(error) => Promise.reject(error))
}