<template>
  <div class="block">
    <h1>{{ homePage.title }}</h1>
    <h2>{{ homePage.subTitle }}</h2>
    <div class="button"><NuxtLink to="/portfolio">Portfolio</NuxtLink></div>
    <div>
      <h3>Contact Me</h3>
      <p>{{ homePage.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    homePage: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}

h2 {
  margin-top: 50px;
}

h3 {
  margin: 0;
  margin-bottom: 8px;
  font-size: $font-medium;
}

p {
  font-weight: 700;
  margin: 0;
}
.block {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 73vh;
  margin: 0 20px;
}

.button {
  margin: 80px 0;
  a {
    text-transform: uppercase;
    transition: 0.6s;
    display: inline-block;
    border: 3px solid $color-accent;
    padding: 10px 22px;
    font-weight: 700;
    font-size: $font-medium;
    color: $color-accent;
    text-decoration: none;

    &:hover {
      color: $color-background;
      background-color: $color-accent;
    }
  }
}
</style>
