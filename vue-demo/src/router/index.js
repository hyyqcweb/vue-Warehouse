import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Detail from '@/page/goodsDetail'
import Dynamic from '@/page/Dynamic'
import Personal from '@/page/Personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path : '/Detail',
    	name :'Detail',
    	component:Detail
    },
    {
      path : '/Personal',
      name : 'Personal',
      component:Personal
    },
    {
      path : '/Dynamic',
      name : 'Dynamic',
      component:Dynamic
    }
  ]
})
