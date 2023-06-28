<template>
  <svg class="menu-icon" width="28px" height="21px" viewBox="0 0 28 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="menu-logo" fill="#ffffff">
      <rect id="top" x="0" y="0" width="28" height="4" rx="2"></rect>
      <rect id="mid" x="14" y="8" :opacity="midOpacity" width="14" height="4" rx="2"></rect>
      <rect id="bottom" :x="bottomX" y="17" :opacity="bottomOpacity" :width="bottomWidth" height="4" rx="2"></rect>
    </g>
  </svg>
</template>

<script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        midOpacity: 0.5,
        bottomOpacity: 0.25,
        bottomWidth: 7,
        bottomX: 21,
      }
    },
    watch: {
      isOpen(n){
        if(n){
          this.midOpacity = 0;
          this.bottomOpacity = 1;
          this.bottomWidth = 28;
          this.bottomX = 0;
        } else {
          this.midOpacity = 0.5;
          this.bottomOpacity = 0.25;
          this.bottomWidth = 7;
          this.bottomX = 21;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-icon {
    g {
      rect {
        transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1)
      }
      rect#bottom {
        transform: rotateX(25deg);
      }
    }
  }
</style>
