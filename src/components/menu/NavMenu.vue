<template>
    <transition name="expand">
        <div class="nav-menu" v-show="show">
            <ul>
                <li>
                    <router-link :to="{ name: 'Home' }">Home</router-link>
                </li>
                <li>
                    <router-link to="/org">Organizations</router-link>
                </li>
            </ul>
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
    .nav-menu{
        position: fixed;
        width: 200px;
        height: 100%;
        top: $header-height;
        left:0;
        background-color: $nav-menu-bg-color;
    }
    .expand-leave-active{
        transform-origin: top !important;
        transform: scaleY(0) !important;
    }
</style>
