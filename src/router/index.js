import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import LiveRoom from '@/components/LiveRoom'
import LiveRoom222 from '@/components/user/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/:roomId',
      name: 'liveRoom',
      component: LiveRoom
    },
    {
      path: '/user/:userid',
      name: 'userProfile',
      component: LiveRoom222
    }
  ]
})
