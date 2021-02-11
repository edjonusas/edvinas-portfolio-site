<template>
  <div :style="{ backgroundImage: portfolio.portfolioImage }">
    <div>{{ portfolio.title }}</div>
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
