<template>
  <div class="container">
    <div
      class="portfolio-post-img"
      :style="{ backgroundImage: 'url(' + portfolio.portfolioImage + ')' }"
    >
      <h2>{{ portfolio.title }}</h2>
    </div>
    <nuxt-content :document="portfolio" />
  </div>
</template>

<script>
export default {
  props: {
    portfolio: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.portfolio-post-img {
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    padding: 20px;
    background-color: $color-accent;
    color: $color-background;
  }
}
</style>
