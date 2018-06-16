// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import { store } from './vuex/store.js'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faCog from '@fortawesome/fontawesome-free-solid/faCog'

fontawesome.library.add(brands, faSpinner, faBars, faCog)

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
