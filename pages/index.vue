<template>
  <section>
    <Home />
  </section>
</template>

<script>
import Home from '~/components/Home/Home.vue'

export default {
  components: { Home },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    }
  },
}
</script>
