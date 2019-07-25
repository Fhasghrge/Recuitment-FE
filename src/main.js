import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://join.stuhome.com/api'
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
