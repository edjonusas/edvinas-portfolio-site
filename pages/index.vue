<template>
  <section>
    <Home :home-page="homePage" />
  </section>
</template>

<script>
import Home from '~/components/Home/Home.vue'

export default {
  components: { Home },
  async asyncData({ $content }) {
    const homePage = await $content('home').fetch()
    return { homePage }
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
}
</script>
