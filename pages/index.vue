<template>
  <section>
    <Home />
  </section>
</template>

<script>
import Home from '~/components/Home/Home.vue'

export default {
  components: { Home },
  async fetch() {
    await this.$store.dispatch('getHomePage')
  },
}
</script>
