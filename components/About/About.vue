<template>
  <div class="container">
    <h2>{{ aboutPage.title }}</h2>
    <div>
      <div>
        <nuxt-content :document="aboutPage.title" />
        <div>
          <h3>Programing skills</h3>
          <ul>
            <li v-for="(skill, index) in aboutPage.title" :key="index">skills</li>
          </ul>
        </div>
      </div>
      <div>img</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    aboutPage: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
