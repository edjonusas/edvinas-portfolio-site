<template>
  <div>
    <PortfolioList :portfolio-list="portfolioList" />
  </div>
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
