import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/login/home.vue'
import answer from './pages/answer/answer.vue'
import adminindex from './pages/adminindex/adminindex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/answer',
      name: 'answer',
      component: answer
    },
    {
      path: '/adminindex',
      name: 'adminindex',
      component: adminindex
    }
  ]
})
