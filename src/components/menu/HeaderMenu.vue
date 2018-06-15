<template>
    <div class="menu-section">
        <div class="menu-button">
            <h2 @click="toggleNav()">X</h2>
        </div>
    </div>
</template>

<script>
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
    }
  },
  components: {

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
        align-items: flex-start;
        top:0;
        left:0;
        width:100%;
        height:$header-height;
        background-color: $header-bg-color;
    }
    .menu-button{

    }
</style>
