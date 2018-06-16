import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    COUNT: state => {
      return state.count
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
    }
  }
})
