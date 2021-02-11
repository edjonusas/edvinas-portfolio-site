<template>
  <div>
    <div v-for="portfolio in portfolioList" :key="portfolio.slug">
      <PortfolioCard :portfolio="portfolio" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolioList: {
      type: Object,
      required: true,
    },
  },
}
</script>
