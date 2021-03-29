<template>
  <div class="container">
    <h2>My portfolio works</h2>
    <div class="block">
      <div v-for="portfolio in portfolioList" :key="portfolio.slug" class="card">
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
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 2rem;
}
.block {
  display: flex;
  flex-direction: column;
}

.card {
  margin-bottom: 0.5rem;
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

  .card {
    margin-bottom: 0;
  }
}
</style>
