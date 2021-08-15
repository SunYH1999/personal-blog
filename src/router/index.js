import {createRouter, createWebHistory} from 'vue-router'
 
const routerHistory = createWebHistory()
 
const router = createRouter({// eslint-disable-line no-unused-vars
    history: routerHistory,
     routes: [{
        path: '/',
        component: resolve => require(['../views/home'], resolve),
        meta: {
            auth: true
        },
        name: 'Home'
    },
    {
        path: '/Home',
        component: resolve => require(['../views/home'], resolve),
        meta: {
            auth: true
        },
        name: 'Home'
    },
    {
        path: '/Passage',
        component: resolve => require(['../views/passage'], resolve),
        meta: {
            auth: true
        },
        name: 'Passage'
    }
  ]
})