import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Admin from '@/components/Admin'
import User from '@/components/User'
import Filters from '@/components/Filters'
import Computed from '@/components/Computed'
import CRender from '@/components/CRender'
import Mixins from '@/components/Mixins'
import Details from '@/components/Admin/User/Details'
import Trans from '@/components/Trans'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Filters',
      name: 'Filters',
      component: Filters
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/CRender',
      name: 'CRender',
      component: CRender
    },
    {
      path: '/Mixins',
      name: 'Mixins',
      component: Mixins
    },
    {
      path: '/Trans',
      name: 'Trans',
      component: Trans
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
