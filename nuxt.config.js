import fs from 'fs'
import { Feed } from 'feed'
import reviews from './static/reviews.json'

export default {
  mode: 'universal',

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
      {
        name: 'supported-color-schemes',
        content: 'dark light only',
      },
      {
        name: 'color-scheme',
        content: 'dark light only',
      },
    ],
    link: [
      { rel: 'home', href: 'https://www.a-year-review.tech' },
      {
        rel: 'self',
        type: 'application/atom+xml',
        href: 'https://www.a-year-review.tech/feed.xml',
      },
    ],
  },

  loading: { color: '#3164f2' },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
  ],

  plugins: ['~/plugins/composition-api'],

  purgeCSS: {
    whitelist: ['dark-mode', 'bg-invers'],
  },

  build: {
    extend() {
      const feed = new Feed({
        title: '2019 in reviews',
        description: '2019 reviews by people in tech',
        link: 'https://www.a-year-review.tech/feed.xml',
      })

      reviews.forEach(review => {
        feed.addItem({
          title: review.author,
          link: review.link,
        })
      })

      fs.writeFile('./static/feed.xml', feed.rss2(), err => {
        if (err) {
          throw err
        }
      })
    },
  },

  generate: {
    routes: ['/2018', '/2019'],
  },

  env: {
    currentYear: '2019',
  },
}
