<template>
  <transition name="app-slide">
    <div id="app" :class="{
      'trim-both':IS_NAV_EXPANDED && IS_SETTINGS_EXPANDED, 
      'trim-left':IS_NAV_EXPANDED && !IS_SETTINGS_EXPANDED, 
      'trim-right':IS_SETTINGS_EXPANDED && !IS_NAV_EXPANDED}">
      <router-view/>
      <header-menu v-on:toggleNav="toggleNav()" v-on:toggleSettings="toggleSettings()"/>
      <base-rollover :direction="'left'" :show="IS_NAV_EXPANDED">
        <nav-menu :show="IS_NAV_EXPANDED"/>
      </base-rollover>
      <base-rollover :direction="'right'" :show="IS_SETTINGS_EXPANDED"/>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderMenu from '@/components/menus/HeaderMenu.vue'
import BaseRollover from '@/components/rollovers/BaseRollover.vue'
import NavMenu from '@/components/menus/NavMenu.vue'
import SettingsMenu from '@/components/menus/SettingsMenu.vue'
export default {
  name: 'App',
  data () {
    return {
    }
  },  
  computed: {
    ...mapGetters(['IS_NAV_EXPANDED', 'IS_SETTINGS_EXPANDED'])
  },
  beforeMount: function () {
    document.body.style.backgroundColor = "#2e3e4e";
  },
  methods: {
    toggleNav () {
      this.$store.commit('toggleNav')
    },
    toggleSettings () {
      this.$store.commit('toggleSettings')
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
      font-weight: 100;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: $body_font_color;
      background-color: $body_bg_color;
      margin-top: $header_height;
      position: fixed;
      top: 0px;
      width: 98vw;
      left: 0px;
      height: 97vh-$header-height;
      padding:10px !important;
    }

    .trim-both{
      left: $nav-width !important;
      right: $nav-width !important;
      width: 98vw-($nav-width*2) !important;
    }

    .trim-left{
      left: $nav-width !important;
      width: 98vw-$nav-width !important;
    }

    .trim-right{
      right: $nav-width !important;
      width: 98vw-$nav-width !important;
    }
</style>
