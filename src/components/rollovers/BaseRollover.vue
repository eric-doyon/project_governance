<template>
    <transition :name="expand_direction">
        <div class="base-rollover" v-bind:class="{'right': direction=='right' }" v-show="show">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
  data () {
    return {
      expand_direction: 'expandleft'
    }
  },
  props: {
    show: {
      type: Boolean
    },
    direction: {
      type: String,
      required: true
    }
  },
  beforeMount: function () {
    this.expand_direction = 'expand' + this.direction
    console.log(this.expand_direction)
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
    .base-rollover{
        position: fixed;
        width: $nav-width;
        height: 100%;
        top: $header-height+1;
        left:0;
        background-color: $settings-menu-bg-color;
        color: $settings-menu-font-color;
        font-size: $settings-menu-font-size;
        border: $master-border;
        border-radius: $master-border-radius;
    }
    .right{
        right:0 !important;
        left:auto !important;
    }
</style>
