<template>
    <div class="home-page">
      <h2>Home</h2>
      <p>{{ COUNT }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
      <h1>Your IP is {{ ip }}</h1>
      <input type="text" v-model="input.firstname" placeholder="First Name" />
      <input type="text" v-model="input.lastname" placeholder="Last Name" />
      <button  v-on:click="sendData()">Send</button>
      <br />
      <br />
      <div> {{ response }} </div>
      <div> {{ rest_api }} </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      ip: "",
      rest_api: "",
      input: {
        firstname: "",
        lastname: ""
      },
      response: ""
    }
  },
  computed: {
    ...mapGetters(['COUNT'])
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
    },
    sendData() {
      this.$http
      .post(
        "https://httpbin.org/post", 
        this.input, 
        { 
          headers: { "content-type": "application/json" } 
        }
      )
      .then(result => {
        this.response = result.data
      }, error => {
        console.error(error)
      });
    }
  },
  beforeMount () {
    this.loadData()
  },
  mounted () {
    this.$http.get("https://httpbin.org/ip").then(result => {
      this.ip = result.body.origin
    }, error => {
      this.ip = error
      console.error(error)
    });
    this.$http.get("http://localhost:8081/greeting").then(result => {
      this.rest_api = result
    }, error => {
      this.rest_api = error
      console.error(error)
    });
  }
}
</script>

<style scoped>

</style>
