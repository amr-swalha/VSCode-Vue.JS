import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Admin from '@/components/Admin'
import User from '@/components/User'
import Details from '@/components/Admin/User/Details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
      children: [{
        path: 'User',
        name: 'User',
        component: User,
        children:[{
          path: 'Details',
        name: 'Details',
        component: Details
        }]
      }]
    }
  ]
})
