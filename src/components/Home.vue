<template>
    <div class="home-page">
        <menu-section/>
        <h2>Home</h2>
    </div>
</template>

<script>
import MenuSection from './menu/MenuSection.vue'
export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  },
  props:{

  },
  components:{
      'menu-section': MenuSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
