<template>
  <footer>
    <div class="social-icons-block">
      <a
        href="https://www.linkedin.com/in/edvinas-jonu%C5%A1as-41a4a6122/"
        rel="noopener"
        target="_blank"
      >
        <img src="@/assets/icons/linkedin-icon.svg" alt="linedin icon" />
      </a>
      <a href="https://www.instagram.com/ed.jonusas/" rel="noopener" target="_blank">
        <img src="@/assets/icons/instagram-icon.svg" alt="instagram icon" />
      </a>
      <a href="https://github.com/edjonusas" rel="noopener" target="_blank">
        <img src="@/assets/icons/github-icon.svg" alt="github icon" />
      </a>
    </div>
    <div class="data">All rights reserved 2020</div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  height: 10vh;
  padding: 40px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .social-icons-block {
    margin-bottom: 25px;
  }

  a {
    padding: 10px;
  }

  .data {
    font-weight: 700;
    font-size: 0.8rem;
  }
}
</style>
