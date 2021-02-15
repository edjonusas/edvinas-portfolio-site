<template>
  <div class="container">
    <h2>{{ aboutPage.title }}</h2>
    <div class="main-block">
      <div class="text-block">
        <p>{{ aboutPage.aboutText }}</p>
        <div class="tech-block">
          <h3>Programing and other skills</h3>
          <ul>
            <li v-for="(skill, index) in aboutPage.skills" :key="index" class="tech">
              {{ skill.skill }}
            </li>
          </ul>
        </div>
      </div>
      <div><img :src="aboutPage.image" alt="about image" /></div>
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
p {
  margin: 0;
}

.main-block {
  display: flex;
  flex-direction: column;
}

.text-block {
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
}

.tech-block {
  text-align: center;
  margin-bottom: 50px;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    li {
      font-weight: 600;
      padding: 10px;
    }
  }

  .tech {
    font-weight: 700;
    color: $color-accent;
    background-color: $color-background;
    border: solid 2px $color-accent;
    padding: 10px 15px;
    margin: 5px;
  }
}

@media (min-width: $breakpoint-tablet) {
  .main-block {
    flex-direction: row;

    > div {
      width: 50%;
    }
  }

  .text-block {
    margin-right: 1rem;
  }
}
</style>
