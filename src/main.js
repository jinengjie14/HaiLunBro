// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import iView from 'iview'
import { LoadingBar, Message, Modal, Notice } from 'iview';
import './my-theme/index.less'
import axios from './http'

Vue.use(iView);

Vue.$Loading = Vue.prototype.$Loading = LoadingBar;
Vue.$Message = Vue.prototype.$Message = Message;
Vue.$Modal = Vue.prototype.$Modal = Modal;
Vue.$Notice = Vue.prototype.$Notice = Notice;

Vue.config.productionTip = false

// 挂载axios
Vue.prototype.$http = axios

// NProgress Config
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })


router.beforeEach((to,from,next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Live from './components/common/Live'
import RoomLive from './components/common/RoomLive'
import Login from './components/common/Login'
import Editor from './components/common/Editor'
import NoteForm from './components/note/noteForm'

Vue.component('Header',Header)
Vue.component('Footer',Footer)
Vue.component('Live',Live)
Vue.component('RoomLive',RoomLive)
Vue.component('Login',Login)
Vue.component('Editor',Editor)
Vue.component('NoteForm',NoteForm)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mode: 'history',
  template: '<App/>',
  components: { App }
})
