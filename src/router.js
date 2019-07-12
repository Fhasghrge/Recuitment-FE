import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/login/home.vue'
import answer from './pages/answer/answer.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/answer',
    name: 'answer',
    component: answer
  }
  ]
})
