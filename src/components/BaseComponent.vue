<template>
    <!-- Needs the template wrapper, any html inside is the component -->
    <div>
    </div>
</template>

<script>
// example imports
// import BaseRollover from '@/components/BaseRollover.vue'
export default {
  data () {
    return {
      // values that live only in this component  
      variable: null
    }
  },
  props: {
      // values that are passed into the component by the parent ie :data="data_array"
  },
  beforeMount: function () {
    // this calls before a component is rendered
  },
  beforeDestroy: function () {
    // this calls before a component is unrendered
  },
  afterMount: function () {
    // this calls after a component is rendered
  },
  afterDestroy: function () {
    // this calls after a component is unrendered
  },
  watch: {
    // watchers let you have functions that react to data changing  
    variable: function (newValue, oldValue) {
      // console.log(newValue)
    }
  },
  components: {
    // register imported components
  },
  methods: {
    // register functions that can operate on the data in this component
    // either as just the name to a function that is defined outside this export call
    // i.e. alterData
    // or as an inline function in this export call
    // i.e. alterData: function(value, value2){ return value + value2}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import '@/assets/css/transitions.scss';
</style>
