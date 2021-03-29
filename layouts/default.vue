<template>
  <div>
    <Navigation />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
h1 {
  font-size: $font-large;
}

h2 {
  font-size: $font-medium;
}

p {
  font-size: $font-small;
  line-height: 1.4rem;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: $color-background;
  color: $color-black;
  overflow-x: hidden;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: #00000000;
}

::selection {
  color: $color-background;
  background: $color-black;
}

//page animation
.page-enter-active,
.page-enter-active {
  transition: opacity 0.6s ease;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
