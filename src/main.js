// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import iView from 'iview'
import './my-theme/index.less'
import axios from 'axios'

Vue.use(iView);

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
Vue.component('Header',Header)
Vue.component('Footer',Footer)
Vue.component('Live',Live)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mode: 'history',
  template: '<App/>',
  components: { App }
})
