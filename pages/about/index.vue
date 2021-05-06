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
  data() {
    return {
      title: 'Developed By Edwin about page',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Developed By Edwin about page - skills and tech I use',
        },
      ],
    }
  },
}
</script>
