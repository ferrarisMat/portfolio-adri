<template>
  <div :class="[isOpen ? 'menu-wrapper-open' : '']" class="menu-wrapper">
    <div :class="[isLogoVisible || isOpen ? 'logo-visible' : 'logo-hidden']" class="logo-wrapper">
      <transition
        name="slide-fade"
      >
        <h1 v-if="isLogoVisible || isOpen">
          <a href="#" @click="onCloseMenu">
            <span class="visually-hidden">Adrien Tardy</span>
            <logo class="menu-logo"></logo>
          </a>
        </h1>
      </transition>
      <button class="menu-button" @click="onMenuClick">
        <span class="visually-hidden">Menu</span>
        <menu-icon :is-open="isOpen"
        />
      </button>
    </div>
    <div v-if="isOpen" class="menu">
      <ul class="main-menu">
        <li><a href="#highlighted" @click="onCloseMenu">highlighted projects</a></li>
        <li><a href="#other" @click="onCloseMenu">other projects</a></li>
        <li><a href="#showreel" @click="onCloseMenu">showreel</a></li>
        <li><a href="#contact" @click="onCloseMenu">contact</a></li>
      </ul>
      <ul class="social-menu">
        <li><a href="https://instagram.com/" target="_blank">instagram</a></li>
        <li><a href="https://behance.net/" target="_blank">behance</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import MenuIcon from './MenuIcon.vue'
export default {
  name: 'HeaderComp',
  components: { Logo, MenuIcon },
  props: {
    isLogoVisible: {type: Boolean, default: false},
    isOpen: {type: Boolean, default: false},
  },
  methods: {
    onMenuClick() {
      this.$emit("onMenuClick");
    },
    onCloseMenu() {
      this.$emit("onCloseMenu");
    },
  },
}
</script>

<style lang="scss" scoped>

.logo-wrapper {
  display: flex;
  margin: 0 auto;
  max-width: 1320px;
  justify-content: space-between;
}

.menu-wrapper {
  z-index: 2;
  left: 0;
  top: 0;
  padding: 60px 0;
  width: 100%;
  position: fixed;
}

.menu-wrapper-open {
  height: 100vh;
  @include main-bg-menu;
}

.menu {
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
  ul {
    li {
      text-align: right;
      a {
        color: #ffffff;
      }
    }
  }
  .main-menu {
    line-height: 1.18;
    a {
      font-size: 64px;
      font-family: 'SF Display Medium', sans-serif;
    }
  }
  .social-menu {
    margin-top: 204px;
    a {
      font-size: 28px;
      font-family: 'MBFOrigin', sans-serif;
      text-decoration: underline;
      font-weight: regular;
    }
  }
}

.menu-logo {
  width: 120px;
}

.visually-hidden {
  @include visually-hidden;
}

.menu-button {
  width: 28px;
  height: 20px;
  position: relative;
  background: transparent;
  margin-left: auto;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translate3D(0, 20px, 0);
  opacity: 0;
}

</style>
