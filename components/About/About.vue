<template>
  <div class="container">
    <h2>About Me</h2>
    <div>
      <div>
        <p>{{ aboutPage.aboutText }}</p>
        <div>
          <h3>Programing skills</h3>
          <ul>
            <li v-for="skill in aboutPage.it_skills" :key="skill.id">{{ skill.skillName }}</li>
          </ul>
        </div>
      </div>
      <div>second row</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    aboutPage() {
      return this.$store.getters.getAboutPage
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
