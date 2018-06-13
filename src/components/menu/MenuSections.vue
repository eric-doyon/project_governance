<template>
    <div class="menu-section">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link to="/org">Organizations</router-link>
    </div>
</template>

<script>
export default {
  name: 'MenuSection',
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
<style scoped>
    .menu-section{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:50px;
        background-color: red;
    }
</style>
