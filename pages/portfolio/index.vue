<template>
  <section>
    <PortfolioList :portfolio-list="portfolioList" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const portfolioList = await $content('portfolio').fetch()

    return {
      portfolioList,
    }
  },
  data() {
    return {
      title: 'Developed By Edwin portfolio page',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Edwin portfolio project made with javascript, vue, nuxt, tailwind...',
        },
      ],
    }
  },
}
</script>
