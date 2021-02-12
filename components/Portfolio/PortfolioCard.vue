<template>
  <div class="card" :style="{ backgroundImage: 'url(' + portfolio.portfolioImage + ')' }">
    <div class="card-name">{{ portfolio.title }}</div>
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
.card {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    background-color: #324b507e;
    transition: 0.5s;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .card-name {
    z-index: 1;
    transition: 0.5s;
    padding: 15px 20px;
    border: solid 3px $color-accent;
    background-color: none;
    color: $color-accent;
    font-weight: 700;
    font-size: 1.2rem;
  }
}

@media (min-width: $breakpoint-tablet) {
  .card {
    width: inherit;
  }
}
</style>
