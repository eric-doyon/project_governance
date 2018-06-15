<template>
    <transition name="fade">
        <div v-show="show">
            <menu-list :list="nav_links"/>
        </div>
    </transition>
</template>

<script>
import MenuList from '@/components/menu/MenuList.vue'
export default {
  data () {
    return {
      nav_links: [
        {
          icon: null,
          link: true,
          name: 'Home',
          text: 'Home'
        },
        {
          icon: null,
          link: true,
          name: 'Organizations',
          text: 'Organizations'
        }
      ]
    }
  },
  props: {
    show: {
      type: Boolean
    }
  },
  beforeMount: function () {
    // console.log(typeof (this.show) + ' = ' + this.show)
  },
  watch: {
    show: function (newValue, oldValue) {
      // console.log(newValue)
    }
  },
  components: {
    MenuList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import '@/assets/css/transitions.scss';
</style>
