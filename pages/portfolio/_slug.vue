<template>
  <section>
    <PortfolioPost :portfolio="post" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('portfolio', params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
  data() {
    return {
      title: 'Developed By Edwin',
    }
  },
  head() {
    return {
      title: ` ${this.title} portfolio project: ${this.post.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Edwin portfolio project: ${this.post.title}  made with javascript, vue, nuxt, tailwind...`,
        },
      ],
    }
  },
}
</script>
