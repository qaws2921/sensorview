import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'expose-loader?$!expose-loader?jQuery!jquery'
// 위에서 추가했던 jQuery 밑에 코드를 작성하세요

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'




library.add(faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)


import './assets/js/tree/file-explore.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
