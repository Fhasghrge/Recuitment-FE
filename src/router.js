import Vue from 'vue'
import Router from 'vue-router'
import home from './pages/login/home.vue'
import answer from './pages/answer/answer.vue'
import adminindex from './pages/adminindex/adminindex.vue'
import overview from './components/overview.vue'
import concrate from './components/concrate.vue'
import marking from './pages/marking/marking.vue'

Vue.use(Router)

export default new Router({
  routes: [{
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
    component: adminindex,
    children: [{
      path: '/',
      name: 'overview',
      component: overview
    },
    {
      path: 'concrate',
      name: 'concrate',
      component: concrate
    }
    ]
  },
  {
    path: '/marking',
    name: 'marking',
    component: marking
  }
  ]
})
