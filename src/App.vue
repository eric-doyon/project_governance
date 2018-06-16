<template>
  <div id="app">
    <router-view/>
    <header-menu v-on:toggleNav="toggleNav()" v-on:toggleSettings="toggleSettings()"/>
    <base-rollover :direction="'left'" :show="isNavOpen">
      <nav-menu :show="isNavOpen"/>
    </base-rollover>
    <base-rollover :direction="'right'" :show="isSettingsOpen"/>
  </div>
</template>

<script>
import HeaderMenu from '@/components/menus/HeaderMenu.vue'
import BaseRollover from '@/components/rollovers/BaseRollover.vue'
import NavMenu from '@/components/menus/NavMenu.vue'
import SettingsMenu from '@/components/menus/SettingsMenu.vue'
export default {
  name: 'App',
  data () {
    return {
      isNavOpen: false,
      isSettingsOpen: false
    }
  },
  methods: {
    toggleNav () {
      this.isNavOpen = !this.isNavOpen
    },
    toggleSettings () {
      this.isSettingsOpen = !this.isSettingsOpen
    }
  },
  components: {
    BaseRollover,
    HeaderMenu,
    NavMenu,
    SettingsMenu
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    #app {
      font-family: $body_font_family;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: $body_font_color;
      background-color: $body_bg_color;
      margin-top: $header_height;
      position: fixed;
      top: 0px;
      width: 100vw;
      left: 0px;
      height: 95vh;
    }
</style>
