<template>
    <div class="organizations-page">
        <header-menu/>
        <nav-menu/>
        <h2>Organizations</h2>
    </div>
</template>

<script>
import HeaderMenu from '@/components/menu/HeaderMenu.vue'
import NavMenu from '@/components/menu/NavMenu.vue'
export default {
  name: 'Organizations',
  data () {
    return {
      msg: ''
    }
  },
  props: {

  },
  components: {
    'header-menu': HeaderMenu,
    'nav-menu': NavMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
