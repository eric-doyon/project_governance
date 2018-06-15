import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/route-views/Home'
import Organizations from '@/route-views/Organizations'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/org',
      name: 'Organizations',
      component: Organizations
    }
  ]
})
