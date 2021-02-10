<template>
  <section>
    <Home />
    {{ page }}
  </section>
</template>

<script>
import Home from '~/components/Home/Home.vue'

export default {
  components: { Home },
  async asyncData({ $content }) {
    const page = await $content('home').fetch()
    return { page }
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
}
</script>
