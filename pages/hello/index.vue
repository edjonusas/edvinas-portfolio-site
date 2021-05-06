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
      title: 'Welcome to Developed By Edwin Home page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Developed By Edwin home page',
        },
      ],
    }
  },
}
</script>
