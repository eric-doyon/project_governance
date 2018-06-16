<template>
    <div class="home-page">
      <h2>Home</h2>
      <p>{{ COUNT }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'COUNT'
    ])
  },  
  methods: {
    loadData () {
      this.$store.commit('loadCount')
    },
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
    	this.$store.commit('decrement')
    }
  },
  beforeMount() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
