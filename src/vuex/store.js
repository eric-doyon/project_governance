import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    is_nav_expanded: false,
    is_settings_expanded: false
  },
  getters: {
    COUNT: state => {
      return state.count
    },
    IS_NAV_EXPANDED: state => {
      return state.is_nav_expanded
    },
    IS_SETTINGS_EXPANDED: state => {
      return state.is_settings_expanded
    }
  },
  mutations: {
    increment (state) {
      state.count++
      localStorage.setItem('count', state.count)
    },
    decrement (state) {
      state.count--
      localStorage.setItem('count', state.count)
    },
    loadCount (state) {
      state.count = localStorage.getItem('count')
    },
    toggleNav (state) {
      state.is_nav_expanded = !state.is_nav_expanded
    },
    toggleSettings (state) {
      state.is_settings_expanded = !state.is_settings_expanded
    }
  }
})
