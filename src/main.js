import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
