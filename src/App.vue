<template>
  <div id="app">
    <router-view/>
    <header-menu v-on:toggleNav="toggleNav()"/>
    <nav-menu :show="isNavOpen"/>
  </div>
</template>

<script>
import HeaderMenu from '@/components/menu/HeaderMenu.vue'
import NavMenu from '@/components/menu/NavMenu.vue'
export default {
  name: 'App',
  data () {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav () {
      this.isNavOpen = !this.isNavOpen
    }
  },
  components: {
    'header-menu': HeaderMenu,
    'nav-menu': NavMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
