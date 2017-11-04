// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import Jwt from 'vue-plugin-jwt'
import Axios from 'axios'
import Jsonp from 'jsonp'
import $ from 'jquery'

Vue.use(Toast, {
  defaultType: 'center',
  duration: 1000,
  wordWrap: true,
  width: '150px'
})

Vue.use(Jwt, {
  store: store,
  axios: Axios,
  jsonp: Jsonp,
  $: $
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
