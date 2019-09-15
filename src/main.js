import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 判断该路由是否需要登录权限
    let username = ''
    if (document.cookie.length > 0) {
      let arr = document.cookie.split('; ')
      for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('=')
        if (arr2[0] === 'jwt') {
          username = arr2[1]
        }
      }
    }
    if (!username) {
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requireAdmin)) {
    let adminname = ''
    let adminpwd = ''
    if (document.cookie.length > 0) {
      let arry = document.cookie.split('; ')
      for (let a = 0; a < arry.length; a++) {
        let arry2 = arry[a].split('=')
        if (arry2[0] === 'adminName') {
          adminname = arry2[1]
        } else if (arry2[0] === 'adminPwd') {
          adminpwd = arry2[1]
        }
      }
    }
    if (!adminname && !adminpwd) {
      next({
        path: '/managerlogin',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
