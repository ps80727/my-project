import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/components/pages/Home/Home'
import Films from '@/components/pages/Films/Films'
import Detail from '@/components/pages/Detail/Detail'
import Mine from '@/components/pages/Mine/Mine'
import User from '@/components/pages/Mine/User/User'
import Login from '@/components/pages/Mine/Login/Login'


import Car from '@/components/pages/Car/Car'
import Goods from '@/components/pages/Goods/Goods'
import NotFound from '@/components/pages/NotFound/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect : '/home'},
    { path: '/home', name: 'home', component: Home},
    { path: '/films', name: 'films', component: Films},
    { path: '/mine', name: 'mine', component: Mine, children : [
        {path : 'login' , name : 'login', component:Login},
        {path : 'user' , name : 'user', component:User}
    ]},
    { path: '/car', name: 'car', component: Car},
    { path: '/goods', name: 'goods', component: Goods},
    { path: '/detail/:id', name: 'detail', component: Detail, props:true},
    { path: '/not-found', name: 'not-found', component: NotFound},
    { path: '**', redirect:'/not-found'},
  ]
})
