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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Developed By Edwin home page. Want to collaborate? call me or send me email',
        },
      ],
    }
  },
}
</script>
