<template>
    <div class="home-page">
      <h2 v-if="false">Home</h2>
      <div v-if="false">
        <p>{{ COUNT }}</p>
        <p>
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </p>
        <h1>Your IP is {{ ip }}</h1>
        <input type="text" v-model="input.firstName" placeholder="First Name" />
        <input type="text" v-model="input.lastName" placeholder="Last Name" />
        <button  v-on:click="sendData()">Send</button>
        <br />
        <br />
      </div>
      <div v-if="false">
      <input type="text" v-model="input.firstName" placeholder="First Name" />
      <input type="text" v-model="input.lastName" placeholder="Last Name" />
      <button  v-on:click="sendData()">Send</button>
      </div>
      <div class="widget-box">
        <base-widget 
          v-for="relationship in relationships" 
          :key="relationship.id"
          :expanded="relationship.expanded"
          :visible="relationship.visible">
          <strong slot="title">{{relationship.firstName}} {{relationship.lastName}}</strong>
          <strong  slot="button" class="expand-icon">
            <font-awesome-icon icon="arrows-alt-v"  @click="expandWidget(relationship.id, relationship.expanded)"/>
          </strong> 
          <div slot="body">
            <transition name="fade">
              <div v-show="!relationship.expanded">
                sample data
              </div>
            </transition>
            <transition name="fade">  
              <div v-show="relationship.expanded">
                <matrix/>
              </div>
            </transition>
          </div>  
        </base-widget>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import BaseWidget from '@/components/widgets/BaseWidget.vue'
import Matrix from '@/components/visualizations/Matrix.vue'
export default {
  name: 'Home',
  data () {
    return {
      ip: "",
      relationships : [],
      input: {
        firstName: "",
        lastName: ""
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
      this.$http.get("http://localhost:8081/relationships").then(result => {
        this.relationships = result.body
        this.relationships = this.relationships.map(function(el) {
          let object = Object.assign({}, el)
          object.expanded = false
          object.visible = true
          return object
        })

      }, error => {
        console.error(error)
      })
    },
    expandWidget(id, expanded) {
      this.relationships = this.relationships.map(function(el){
          let object = Object.assign({}, el)
          if(!expanded){          
            if(id == object.id){
              object.expanded = true
            }
            else{
              object.visible = false
            }
          }
          else{
            object.expanded = false;
            object.visible = true;
          }          
          return object
      })
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
        // "https://httpbin.org/post", 
        "http://localhost:8081/relationships/add",
        this.input, 
        { 
          headers: { "content-type": "application/json" } 
        }
      )
      .then(result => {
        this.response = result.data
        this.loadData()
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
  },
  components:{
    FontAwesomeIcon,
    BaseWidget,
    Matrix
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/main.scss';
  @import '@/assets/css/transitions.scss';
  
  .home-page{
    height: 84%;
    width: 100%;
  }

  .widget-box{
    /* display:flex; 
    flex-direction:row; 
    flex-wrap: wrap; 
    align-content: stretch; 
    justify-content:space-around;  */
    height:100%; 
    overflow-y:scroll;  
    -ms-overflow-style: none; 
  }

  .widget-box::-webkit-scrollbar { 
      display: none;  
  }

  .expand-icon{
    padding: 4px;
    transform: rotate(45deg);
  }

  .expand-icon:hover{
    cursor: pointer;
    opacity: 1;
  }
</style>
