<template>
  <div class="container">
    <form name="contact" @submit.prevent="handleSubmit">
      <div>
        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        <input v-model="form.name" placeholder="Enter your name" type="text" name="name" />
        <input v-model="form.email" placeholder="Enter your email" type="email" name="email" />
      </div>
      <textarea v-model="form.message" name="message" placeholder="Your message ..."></textarea>
      <button type="submit">Send</button>
      <div v-if="error" class="message red">Please fill all inputs</div>
      <div v-if="send" class="message green">Message sent</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      error: false,
      send: false,
    }
  },
  watch: {
    send(val) {
      setTimeout(() => {
        this.send = false
      }, 3000)
    },
    error(val) {
      setTimeout(() => {
        this.error = false
      }, 3000)
    },
  },
  methods: {
    inputFill(value) {
      if (value.length > 0) {
        return true
      }
      return false
    },

    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    },
    handleSubmit() {
      if (
        !this.inputFill(this.form.name) ||
        !this.inputFill(this.form.email) ||
        !this.inputFill(this.form.message)
      ) {
        this.error = true
        return false
      }
      this.error = false
      this.send = true
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      this.$axios.post(
        '/contacts',
        this.encode({
          'form-name': 'contact',
          ...this.form,
        }),
        axiosConfig
      )
    },
  },
}
</script>

<style lang="scss" scoped>
form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 60%;
}
label {
  position: absolute;
  left: -1000px;
}

input,
textarea {
  color: $color-black;
  border: 2px solid $color-accent;
  background: none;
  padding: 1rem;
  margin-bottom: 0.6rem;
  box-sizing: border-box;
  width: 100%;
}
textarea {
  height: 200px;
}

input::placeholder,
textarea::placeholder {
  color: $color-black;
  opacity: 0.6;
}

button {
  margin-bottom: 0.6rem;
  padding: 1rem;
  border: 2px solid $color-accent;
  background: none;
  text-transform: uppercase;
  font-size: $font-medium;
  font-weight: 700;
  color: $color-accent;
}

button:hover {
  color: $color-background;
  background: $color-accent;
}

.message {
  text-align: center;
  padding: 1rem;
}

.red {
  color: #ff8c8c;
  border: 2px solid #ff8c8c;
}

.green {
  color: #69e487;
  border: 2px solid #69e487;
}
</style>
