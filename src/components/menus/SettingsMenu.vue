<template>
    <transition name="fade">
        <div class="settings-menu" v-show="show">
        </div>
    </transition>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import '@/assets/css/transitions.scss';
    .settings-menu{
        position: fixed;
        width: 200px;
        height: 100%;
        top: $header-height+1;
        right:0;
        background-color: $settings-menu-bg-color;
        color: $settings-menu-font-color;
        font-size: $settings-menu-font-size;
        border: $master-border;
        border-radius: $master-border-radius;
    }
    .expand-enter-active{
        transform-origin: right !important;
    }
    .expand-leave-active{
        transform-origin: right !important;
    }
</style>
