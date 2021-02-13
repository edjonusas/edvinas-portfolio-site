<template>
  <div>
    <PortfolioPost :portfolio="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    console.log(params)
    try {
      post = await $content('portfolio', params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },

  created() {
    console.log('worked')
    this.$router.push({ path: '/portfolio/' + this.post.slug })
  },
}
</script>
