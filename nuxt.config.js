export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '2019 in reviews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      {
        hid: 'description',
        name: 'description',
        content: '2019 reviews by people in tech',
      },
      { property: 'og:site_name', content: '2019 in reviews' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: '2019 in reviews' },
      {
        property: 'og:description',
        content: '2019 reviews by people in tech',
      },
    ],
    link: [{ rel: 'home', href: 'https://www.a-year-review.tech' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3164f2' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend() {},
  },
}
