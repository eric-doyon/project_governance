<template>
    <div class="organizations-page">
        <h2>Organizations</h2>
        <div style="display:flex; flex-direction:row; width:500px; height:500px">
          <div style="width:100px; display:flex; align-items:center;">
            <h3 class="vertical">Risk Impact</h3>
            <div style="display:flex; flex-direction:column-reverse; height:88%; justify-content:space-around; padding-left:4px; padding-right:4px; margin-bottom: 30px; border-left: 1px solid #fff;">
            <div v-for="level in ['lowest', 'low', 'medium', 'high', 'highest']" :key="level.index">
              {{level}}
            </div>  
          </div>
          </div>
          <div style="display:flex; flex-direction:column;">
            <div style="width:450px; height:450px">
              <div class="matrix" style="width:450px; height:450px">
                <div v-for="risk in risks" :key="risk.index" :class="getColorClass(risk.count, risk.index)"  class="box">
                  <span class="count">{{(risk.count)}}</span>
                </div>
              </div>
            </div>
            <div style="height:100px;">
              <div style="display:flex; flex-direction:row; justify-content:space-around; padding-top:8px">
                <div v-for="level in ['lowest', 'low', 'medium', 'high', 'highest']" :key="level.index">
                  {{level}}
                </div>                 
              </div>
              <h3 class="horizontal">Risk Likelihood</h3> 
            </div>
          </div>  
        </div>  
    </div>    
</template>

<script>
import vis from 'vis'
export default {
  name: 'Organizations',
  data () {
    return {
      risks: [
        {
          index:1,
          count:20
        },
        {
          index:2,
          count:2
        },
        {
          index:3,
          count:0
        },
        {
          index:4,
          count:2
        },
        {
          index:5,
          count:2
        },
        {
          index:6,
          count:2
        },
        {
          index:7,
          count:2
        },
        {
          index:8,
          count:2
        },
        {
          index:9,
          count:2
        },
        {
          index:10,
          count:2
        },
        {
          index:11,
          count:2
        },
        {
          index:12,
          count:2
        },
        {
          index:13,
          count:2
        },
        {
          index:14,
          count:2
        },
        {
          index:15,
          count:2
        },
        {
          index:16,
          count:2
        },
        {
          index:17,
          count:2
        },
        {
          index:18,
          count:2
        },
        {
          index:19,
          count:2
        },
        {
          index:20,
          count:2
        },
        {
          index:21,
          count:2
        },
        {
          index:22,
          count:2
        },
        {
          index:23,
          count:1
        },
        {
          index:24,
          count:24
        },
        {
          index:25,
          count:1
        }
      ],
      data: null,
      graph: null
    }
  },
  props: {

  },
  components: {
  },
  mounted () {
    //this.drawVisualization()
  },
  methods: {
    getColorClass: function (count, index){
      let likelihood =  Math.floor(index/5)
      let impact = (index % 5 == 0 ? 10 : index % 5)
      if(likelihood == 5)
        likelihood += 15
      let overall_risk = (likelihood+impact)*count
      if(overall_risk > 30)
        overall_risk = 30
      return "background-"+overall_risk  
      //return Math.floor(index/5)*risk
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/css/main.scss';
@import '@/assets/css/transitions.scss';

.vertical {
  display: inline-block;
  white-space: nowrap;
  transform: translate(0,100%) rotate(-90deg);
  transform-origin: 0 0;
  font-size:$master-font-size-small;
  margin-right:-35px;   
}

.horizontal{
  width: 100%;
  font-size:$master-font-size-small;
  border-top: 1px solid #fff;
  padding-top:8px; 
}
.matrix{
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-around; 
  flex-wrap: wrap; 
  align-content: stretch;   
}

.box{
  width:19%; 
  border:1px solid #333; 
  height:19%; 
  display: flex; 
  align-items:center; 
  justify-content: center;
  opacity: 1;
}

.box:hover{
  cursor: pointer;
}

.count{
  font-size:$master-font-size-medium;
  font-weight: bold;
  color: $master-neutral-color; 
}

.background-30{
  background-color:rgba(255, 0, 0, 0.65)
}
.background-30:hover{
  background-color:rgba(255, 0, 0, 0.85)
}
.background-29{
  background-color:rgba(255, 17, 0, 0.65)
}
.background-29:hover{
  background-color:rgba(255, 17, 0, 0.85)
}
.background-28{
  background-color:rgba(255, 34, 0, 0.65)
}
.background-28:hover{
  background-color:rgba(255, 34, 0, 0.85)
}
.background-27{
  background-color:rgba(255, 51, 0, 0.65)
}
.background-27:hover{
  background-color:rgba(255, 51, 0, 0.85)
}
.background-26{
  background-color:rgba(255, 68, 0, 0.65)
}
.background-26:hover{
  background-color:rgba(255, 68, 0, 0.85)
}
.background-25{
  background-color:rgba(255, 85, 0, 0.65)
}
.background-25:hover{
  background-color:rgba(255, 85, 0, 0.85)
}
.background-24{
  background-color:rgba(255, 102, 0, 0.65)
}
.background-24:hover{
  background-color:rgba(255, 102, 0, 0.85)
}
.background-23{
  background-color:rgba(255, 119, 0, 0.65)
}
.background-23:hover{
  background-color:rgba(255, 119, 0, 0.85)
}
.background-22{
  background-color:rgba(255, 136, 0, 0.65)
}
.background-22:hover{
  background-color:rgba(255, 136, 0, 0.85)
}
.background-21{
  background-color:rgba(255, 153, 0, 0.65)
}
.background-21:hover{
  background-color:rgba(255, 153, 0, 0.85)
}
.background-20{
  background-color:rgba(255, 170, 0, 0.65)
}
.background-20:hover{
  background-color:rgba(255, 170, 0, 0.85)
}
.background-19{
  background-color:rgba(255, 187, 0, 0.65)
}
.background-19:hover{
  background-color:rgba(255, 187, 0, 0.85)
}
.background-18{
  background-color:rgba(255, 204, 0, 0.65)
}
.background-18:hover{
  background-color:rgba(255, 204, 0, 0.85)
}
.background-17{
  background-color:rgba(255, 221, 0, 0.65)
}
.background-17:hover{
  background-color:rgba(255, 221, 0, 0.85)
}
.background-16{
  background-color:rgba(255, 238, 0, 0.65)
}
.background-16:hover{
  background-color:rgba(255, 238, 0, 0.85)
}
.background-15{
  background-color:rgba(255, 255, 0, 0.65)
}
.background-15:hover{
  background-color:rgba(255, 255, 0, 0.85)
}
.background-14{
  background-color:rgba(238, 255, 0, 0.65)
}
.background-14:hover{
  background-color:rgba(238, 255, 0, 0.85)
}
.background-13{
  background-color:rgba(221, 255, 0, 0.65)
}
.background-13:hover{
  background-color:rgba(221, 255, 0, 0.85)
}
.background-12{
  background-color:rgba(204, 255, 0, 0.65)
}
.background-12:hover{
  background-color:rgba(204, 255, 0, 0.85)
}
.background-11{
  background-color:rgba(187, 255, 0, 0.65)
}
.background-11:hover{
  background-color:rgba(187, 255, 0, 0.85)
}
.background-10{
  background-color:rgba(170, 255, 0, 0.65)
}
.background-10:hover{
  background-color:rgba(170, 255, 0, 0.85)
}
.background-9{
  background-color:rgba(153, 255, 0, 0.65)
}
.background-9:hover{
  background-color:rgba(153, 255, 0, 0.85)
}
.background-8{
  background-color:rgba(136, 255, 0, 0.65)
}
.background-8:hover{
  background-color:rgba(136, 255, 0, 0.85)
}
.background-7{
  background-color:rgba(119, 255, 0, 0.65)
}
.background-7:hover{
  background-color:rgba(119, 255, 0, 0.85)
}
.background-6{
  background-color:rgba(102, 255, 0, 0.65)
}
.background-6:hover{
  background-color:rgba(102, 255, 0, 0.85)
}
.background-5{
  background-color:rgba(55, 233, 10, 0.65)
}
.background-5:hover{
  background-color:rgba(55, 233, 10, 0.85)
}
.background-4{
  background-color:rgba(12, 218, 46, 0.65)
}
.background-4:hover{
  background-color:rgba(12, 218, 46, 0.85)
}
.background-3{
  background-color:rgba(15, 180, 89, 0.65)
}
.background-3:hover{
  background-color:rgba(15, 180, 89, 0.85)
}
.background-2{
  background-color:rgba(20, 146, 204, 0.65)
}
.background-2:hover{
  background-color:rgba(20, 146, 204, 0.85)
}
.background-1{
  background-color:rgba(12, 85, 194, 0.65)
}
.background-1:hover{
  background-color:rgba(12, 85, 194, 0.85)
}
.background-0{
  background-color:rgba(75, 107, 212, 0.65)
}
.background-0:hover{
  background-color:rgba(75, 107, 212, 0.65)
}
</style>
