import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('./views/home')
        }
        ,
        {
            path: '/passage',
            name: 'passage',
            component: () => import('./views/passage')
        }
    ]
})