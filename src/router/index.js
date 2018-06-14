import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Organizations from '@/components/Organizations'

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
