import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://121.48.165.58:17839'
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
