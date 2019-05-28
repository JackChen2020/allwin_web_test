

import NotFound from '../views/404.vue'
import wechat from './views/wechat/index'

import Router from 'vue-router'
Vue.use(Router)

let routes = [
    {
        path: '/',
        component: wechat,
        name: '傲银微信h5测试',
    },
    {
        path: '/jl',
        component: wechat,
        name: '傲银微信h5测试',
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
]

export default new Router({
    routes: routes
})
