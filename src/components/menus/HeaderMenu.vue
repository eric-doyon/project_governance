<template>
    <div class="menu-section">
        <base-button class="menu-button" v-on:click.native="toggleNav()" :is_icon_only="true">           
            <font-awesome-icon icon="bars" slot="icon"/>         
        </base-button>
        <base-button class="settings-button" v-on:click.native="toggleSettings()" :is_icon_only="true">           
            <font-awesome-icon icon="cog" slot="icon"/>         
        </base-button>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import BaseButton from '@/components/buttons/BaseButton.vue'
export default {
  data () {
    return {
      msg: ''
    }
  },
  props: {
  },
  methods: {
    toggleNav () {
      // console.log('toggled nav')
      this.$emit('toggleNav')
    },
    toggleSettings () {
      // console.log('toggled settings')
      this.$emit('toggleSettings')
    }
  },
  components: {
    FontAwesomeIcon,
    BaseButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    .menu-section{
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        top:0;
        left:0;
        width:100%;
        height:$header-height;
        background-color: $header-bg-color;
        color: $header-font-color;
        border: $master-border;
        border-radius: $master-border-radius;
    }
    .menu-button{
        margin-right: auto;
        margin-left: $small-space;
    }
    .settings-button{
        margin-left:auto;
        margin-right: $small-space;
    }
</style>
