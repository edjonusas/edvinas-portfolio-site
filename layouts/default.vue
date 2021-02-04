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
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: $color-background;
  color: $color-black;
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
</style>
