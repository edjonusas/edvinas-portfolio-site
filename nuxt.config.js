export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Developed By Edwin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['normalize.css/normalize.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/gtag'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/style-resources', '@nuxt/content', '@nuxtjs/axios'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true,
  },

  // add sass variables to project
  styleResources: {
    scss: ['~/assets/scss/variables.scss', '~/assets/scss/global-classes.scss'],
  },
  content: {
    // Options
  },
  generate: {
    fallback: true,
  },

  axios: {
    baseURL: 'https://developedbyedwin.com/',
  },
}
