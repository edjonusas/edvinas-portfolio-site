<template>
  <section>
    <About :about-page="aboutPage" />
  </section>
</template>

<script>
import About from '~/components/About/About.vue'
export default {
  components: { About },
  async asyncData({ $content }) {
    const aboutPage = await $content('about').fetch()
    return { aboutPage }
  },
}
</script>
