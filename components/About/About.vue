<template>
  <div class="container">
    <h2>{{ aboutPage.title }}</h2>
    <div>
      <div>
        <p>{{ aboutPage.aboutText }}</p>
        <nuxt-content :document="aboutPage" />
        <div>
          <h3>Programing skills</h3>
          <ul>
            <li v-for="(skill, index) in aboutPage.skills" :key="index">{{ skill.skill }}</li>
          </ul>
        </div>
      </div>
      <div><img :src="aboutPage.image" alt="about image" /></div>
    </div>
    {{ aboutPage }}
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
