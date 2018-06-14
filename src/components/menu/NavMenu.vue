<template>
    <div class="nav-menu">
        <header-menu/>
        <ul>
            <li>Home</li>
            <li>Organizations</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      msg: ''
    }
  },
  props:{

  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    .nav-menu{
        position: fixed;
        width: 200px;
        height: 100%;
        top: $header-height;
        left:0;
        background-color: $nav-menu-bg-color;
    }
</style>
