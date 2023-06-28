<template>
  <div id="app">
    <header-comp :is-logo-visible="isLogoVisible" :is-open="isOpen" @onMenuClick="onMenuClick" @onCloseMenu="onCloseMenu"></header-comp>
    <h1 id="#" class="logo-big">
      <nuxt-link to="/">
        <span>Adrien Tardy</span>
        <logo></logo>
      </nuxt-link>
    </h1>
    <section id="highlighted">
      <nexten class="illustration-item"></nexten>
      <electronic-billing-illu class="illustration-item"></electronic-billing-illu>
      <axon-jay-illu class="illustration-item"></axon-jay-illu>
    </section>
  </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import HeaderComp from '~/components/HeaderComp.vue'
import Nexten from '~/components/NextenIllu.vue'
import ElectronicBillingIllu from '~/components/ElectronicBillingIllu.vue';
import AxonJayIllu from '~/components/AxonJayIllu.vue';

function setLogoVisible(el, top, height){
  if(window.scrollY > (top + height - 20)){
    el.isLogoVisible = true;
  } else {
    el.isLogoVisible = false;
  }
}

export default {
  name: 'IndexPage',
  components: {
    Logo,
    HeaderComp,
    Nexten,
    ElectronicBillingIllu,
    AxonJayIllu,
  },
  data() {
    return {
      isLogoVisible: false,
      isOpen: false,
    }
  },
  mounted(){
    const logoBig = document.getElementsByClassName("logo-big")[0];
    const logoBigTop = logoBig.getBoundingClientRect().top;
    const logoBigHeight = logoBig.getBoundingClientRect().height;

    setLogoVisible(this, logoBigTop, logoBigHeight)

    window.addEventListener('scroll', () => {
      setLogoVisible(this, logoBigTop, logoBigHeight)
    })
    window.addEventListener('resize', () => {
      setLogoVisible(this, logoBigTop, logoBigHeight)
    })
  },
  destroyed() {
    window.removeEventListener('scroll', () => {})
  },
  methods: {
    onCloseMenu(){
      this.isOpen = false;
      document.body.style.overflow = "visible";
    },
    onMenuClick(){
      this.isOpen = !this.isOpen;
      if(this.isOpen){
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }
  },
}
</script>

<style lang="scss">
html {
  background: $main-bg-color;
  scroll-behavior: smooth;
}
html {
  overflow-x: hidden;
}
body {
  width: 100vw;
  height: 100vh;
  font-family: 'NTR', sans-serif;
  @include main-bg;
  min-height: 5679px;
}
#app {
  padding-top: 60px;
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
}
.logo-big {
  text-align: center;
  width: 290px;
  margin: 0 auto;
  margin-top: 120px;
  span {
    @include visually-hidden
  }
}

#highlighted {
  margin-top: 114px;
}

.illustration-item {
  margin: 114px 0;
}
</style>
