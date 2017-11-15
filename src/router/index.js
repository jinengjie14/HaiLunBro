import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import LiveRoom from '@/components/LiveRoom'
import User from '@/components/user/Index'
import LiveInfo from '@/components/user/liveInfo'
import LiveSetting from '@/components/user/liveSetting'
import UserSetting from '@/components/user/userSetting'
import UserInfo from '@/components/user/userInfo'
import Note from '@/components/user/note'
import NoteList from '@/components/note/Index'
import Notepage from '@/components/note/notePage'
import AllLive from '@/components/allLive'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/note',
      name: 'noteList',
      component: NoteList
    },
    {
      path: '/directory/all',
      name: 'allLive',
      component: AllLive
    },
    {
      path: '/note/:id',
      name: 'notePage',
      component: Notepage
    },
    {
      path: '/:roomId',
      name: 'liveRoom',
      component: LiveRoom
    },
    {
      path: '/user/',
      name: 'userParent',
      component: User,
      children: [
          {
              path: ':id',
              component: UserInfo
          },
          {
              path: ':id/setting',
              component: UserSetting
          },
          {
              path: ':id/liveinfo',
              component: LiveInfo
          },
          {
              path: ':id/livesetting',
              component: LiveSetting
          },
          {
              path: ':id/note',
              component: Note
          }
    ]
    }
  ]
})
