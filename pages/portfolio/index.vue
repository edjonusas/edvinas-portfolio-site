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
}
</script>
