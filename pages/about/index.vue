<template>
  <About />
</template>

<script>
import About from '~/components/About/About.vue'
export default {
  components: { About },
  async fetch() {
    await this.$store.dispatch('getAboutPage')
  },
}
</script>
