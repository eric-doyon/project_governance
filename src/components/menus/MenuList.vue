<template>
    <div class="container">
        <div class="element" v-for="item in list" :key="item.index">
            <span v-if="item.link">
                <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
                <router-link :to="{ name: item.name }">{{item.text}}</router-link>
            </span>
            <span v-if="!item.link">
                <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
                {{item.text}}
            </span>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  data () {
    return {
    }
  },
  props: {
      list: {
          type: Array,
          required: true
      }
  },
  components: {
      FontAwesomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import '@/assets/css/transitions.scss';

    .container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .element{
        height:40px;
        display:flex;
        align-items: center;
        margin-top:$large-space;
        margin-left:$large-space;
    }
    
    a{
        text-decoration: none !important;
        color: $master-font-color;
        opacity: 0.6;
    }

    a:hover{
        opacity: 1;
    }
</style>
