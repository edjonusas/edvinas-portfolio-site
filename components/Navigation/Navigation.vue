<template>
  <nav>
    <img :src="menuIcon" alt="mobile navigation icon" @click="menuToggle" />
    <div class="nav-block" :class="{ 'hide-block': !menuOpen }">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/portfolio">Portfolio</NuxtLink>
      <NuxtLink to="/contacts">Contacts</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    }
  },
  computed: {
    menuIcon() {
      if (this.menuOpen) {
        return require('@/assets/icons/close-icon.svg')
      } else {
        return require('@/assets/icons/mobile-navigation-icon.svg')
      }
    },
  },
  watch: {
    $route() {
      this.menuOpen = false
    },
  },
  mounted() {
    document.addEventListener('click', this.menuClose)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.menuClose)
  },
  methods: {
    menuToggle() {
      this.menuOpen = !this.menuOpen
    },
    menuClose(e) {
      if (!this.$el.contains(e.target)) {
        this.menuOpen = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  z-index: 2;
  height: 10vh;
  position: relative;
}

img {
  position: fixed;
  -webkit-tap-highlight-color: transparent;
  z-index: 3;
  float: right;
  padding: 10px;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.hide-block {
  opacity: 0;
  visibility: hidden;
}

.nav-block {
  position: fixed;
  z-index: 2;
  transition: 0.5s;
  top: 0;
  right: 0;
  padding: 200px 40px 0;
  background-color: $color-background;
  text-transform: uppercase;
  font-size: $font-medium;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 200px);
  box-shadow: -5px 1px 10px 5px #00000049;

  .nuxt-link-exact-active {
    background-color: $color-accent;
    color: $color-background;
  }

  a {
    position: relative;
    color: $color-black;
    font-weight: 700;
    text-decoration: none;
    padding: 0.7rem 1rem;

    &:hover {
      background-color: $color-accent;
      color: $color-background;
    }
  }
}

@media (min-width: $breakpoint-tablet) {
  img {
    display: none;
  }

  .hide-block {
    opacity: 100;
    visibility: inherit;
  }

  .nav-block {
    position: relative;
    width: 100%;
    padding: 50px 0 30px;
    flex-direction: row;
    justify-content: center;
    background: none;
    height: initial;
    box-shadow: none;
  }
}
</style>
