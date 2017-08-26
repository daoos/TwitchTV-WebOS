import 'jquery'
// import './webOS.js'
import 'materialize-css'

import Vue from 'vue'
import LoadScript from 'vue-plugin-load-script'

import App from './components/App.vue'

import store from './store'
import router from './router'

Vue.use(LoadScript)

// Vue config
Vue.config.debug = process.env.APP_DEBUG === 'true'
Vue.config.silent = process.env.APP_DEBUG !== 'true'
Vue.config.productionTip = process.env.APP_DEBUG !== 'true'
Vue.config.performance = process.env.APP_DEBUG === 'true'

// Mount App component
if (document.getElementById('app')) {
	/* eslint-disable no-unused-vars, no-new */
	var vm = new Vue({
		// name: 'vm',
		el: '#app',
		router,
		store,
		render: h => h(App)
		// template: '<App/>',
		// components: { App }
	}).$mount('#app')
}
