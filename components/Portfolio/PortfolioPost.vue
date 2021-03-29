<template>
  <div class="container">
    <div
      class="portfolio-post-img"
      :style="{ backgroundImage: 'url(' + portfolio.portfolioImage + ')' }"
    >
      <h2>{{ portfolio.title }}</h2>
    </div>
    <div class="content">
      <nuxt-content :document="portfolio" />
    </div>
    <div class="tech-block">
      <h3>Tech used</h3>
      <div>
        <div v-for="(tech, index) in portfolio.techList" :key="index" class="tech">
          {{ tech.techUsed }}
        </div>
      </div>
    </div>
    <div class="links">
      <div v-if="portfolio.siteLink" class="link-block">
        <img src="@/assets/icons/global-icon.svg" alt="site icon" />
        <a :href="portfolio.siteLink">Link to site</a>
      </div>
      <div v-if="portfolio.gitHubLink" class="link-block">
        <img src="@/assets/icons/github-icon.svg" alt="github icon" />
        <a :href="portfolio.gitHubLink">Link to Github</a>
      </div>
    </div>
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

.content {
  padding: 20px 0;
}

.link-block {
  margin: 20px 20px;
  display: flex;
  align-items: center;

  img {
    margin-right: 15px;
  }

  a {
    font-weight: 700;
    color: $color-black;
    text-decoration: none;
  }
}

.tech-block {
  text-align: center;
  margin-bottom: 50px;

  > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .tech {
      font-weight: 700;
      color: $color-accent;
      background-color: $color-background;
      border: solid 2px $color-accent;
      padding: 10px 15px;
      margin: 5px;
    }
  }
}
</style>
