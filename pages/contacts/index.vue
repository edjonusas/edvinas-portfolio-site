<template>
  <section>
    <Contacts />
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Developed By Edwin contacts page',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Developed By Edwin contact page. Want to collaborate? call me or send email',
        },
      ],
    }
  },
}
</script>
