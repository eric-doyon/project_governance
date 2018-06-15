<template>
    <div class="base-button" v-bind:class="{'theme': is_theme && !is_icon_only, 'icon-only':is_icon_only }">
        <slot name="icon"/>
        <slot name="text" v-if="!is_icon_only"/>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
      is_icon_only: {
        type: Boolean,
        default: false,
        required: false
      },
      is_theme:{
        type: Boolean,
        default: false,
        required: false
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import '@/assets/css/transitions.scss';

    .base-button{   
        transition: color 0.5 ease-out;
        padding: $small-space;
        border: $master-border;
        border-radius: $master-border-radius;
        background-color: $master-neutral-color;
        color: $master-font-color;
    }
    .base-button:hover{
        cursor:pointer;
        color: adjust-color($color: $body_font_color, $lightness: -10%)              
    }
    .theme{        
        transition: background-color 0.5 ease-out;
        background-color: $master-theme-color;
        color: $master-font-color-alt;
    }
    .theme:hover{
        background-color: adjust-color($color: $master-theme-color, $lightness: 10%)
    }
    .icon-only{        
        transition: color 0.5 ease-out;
        border: none !important;
        font-size: $master-font-size-large;
        background-color: transparent;
        color: $body_font_color;
    }
    .icon-only:hover{
        color: adjust-color($color: $body_font_color, $lightness: -10%)
    }
</style>
