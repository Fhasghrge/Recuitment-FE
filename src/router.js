import Vue from 'vue'
import VueRouter from 'vue-router'

import introduce from './router/Pre-Introduce.vue'
import text from './router/sub/introduce.vue'
import product from './router/sub/product.vue'
import FE from './router/sub/FE.vue'
import BE from './router/sub/BE.vue'
import mobile from './router/sub/mobile.vue'
import design from './router/sub/design.vue'
import DevOps from './router/sub/DevOps.vue'
import ending from './router/Ending.vue'
import managerLogin from './router/managerLogin.vue'
import manager from './router/manager.vue'
import checking from './router/sub/checking.vue'
import add from './router/sub/add.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/manager/add'},
        {path:'/main',
        component:introduce,
        children:[
            {path:'/',component:text},
            {path:'product',component:product},
            {path:'FE',component:FE},
            {path:'BE',component:BE},
            {path:'mobile',component:mobile},
            {path:'design',component:design},
            {path:'DevOps',component:DevOps}
        ]
        },
        {path:'/ending',component:ending},
        {path:'/managerlogin',component:managerLogin},
        {path:'/manager',
        component:manager,
        children:[
            {path:'checking',component:checking},
            {path:'add',component:add},
        ]}
    ]
})

// 将路由对象暴露出去
export default router;