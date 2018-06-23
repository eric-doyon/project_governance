<template>
    <div class="organizations-page">
        <h2>Organizations</h2>
        <div id="mygraph"></div>
    </div>
</template>

<script>
import vis from 'vis'
export default {
  name: 'Organizations',
  data () {
    return {
      data:null,
      graph: null
    }
  },
  props: {

  },
  components: {
  },
  mounted () {
    this.drawVisualization()
  },
  methods: {
    custom: function (x, y) {
      return (Math.sin(x/50) * Math.cos(y/50) * 50 + 50)
    },
    drawVisualization: function () {
      // Create and populate a data table.
      this.data = new vis.DataSet();
      for (let x = 1; x <= 5; x++) {
        for (let y = 1; y <= 5; y++) {
          let value = this.custom(x, y);
          this.data.add({
            x: x,
            y: y,
            z: x+y
          });
        }
      }

      console.log(this.data);      

      // specify options
      let options = {
        width:  '600px',
        height: '600px',
        style: 'bar',
        showPerspective: true,
        showGrid: true,
        showShadow: false,
        keepAspectRatio: true,
        verticalRatio: 0.5
      };

      // create a graph3d
      let container = document.getElementById('mygraph');
      this.graph = new vis.Graph3d(container, this.data, options);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
