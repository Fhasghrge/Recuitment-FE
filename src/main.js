import Vue from 'vue'

// 导入APP组件
import app from './App.vue'
// 导入路由组件
import router from './router.js'
import axios from 'axios'

// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios)

Vue.prototype.$axios = axios

import './css/style.css'

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c =>c(app),
    router,
})