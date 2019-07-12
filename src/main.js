import Vue from 'vue'

// 导入APP组件
import app from './App.vue'
import router from './router.js'

import './css/style.css'

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c =>c(app),
    router,
})