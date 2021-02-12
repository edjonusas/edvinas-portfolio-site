<template>
  <div class="container">
    <h2>My portfolio works</h2>
    <div class="block">
      <div v-for="portfolio in portfolioList" :key="portfolio.slug">
        <nuxt-link :to="'/portfolio/' + portfolio.slug">
          <PortfolioCard :portfolio="portfolio" />
        </nuxt-link>
      </div>
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

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

a {
  text-decoration: none;
}

a:hover {
  /deep/ .card-name {
    background-color: $color-accent;
    color: $color-background;
  }
  /deep/ .card::after {
    background-color: #324b50b4;
  }
}

@media (min-width: $breakpoint-tablet) {
  .block {
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 0.5rem));
    grid-auto-rows: auto;
    grid-gap: 1rem;
  }
}
</style>
