<template>
  <footer class="w-full text-center text-jumbo p-16 bg-dimmed">
    <p class="mb-4">
      Made by
      <a-link href="https://www.dieterstinglhamber.me">Elhebert</a-link>
      using&nbsp;<a-link href="https://tailwindcss.com">Tailwind CSS</a-link>,
      powered by&nbsp;<a-link href="https://nuxtjs.org">Nuxt.js</a-link> and
      hosted on&nbsp;<a-link href="https://www.netlify.com">Netlify</a-link>.
    </p>
    <p>
      Design by
      <a-link href="https://www.dieterstinglhamber.me">Elhebert</a-link>
      &nbsp;&amp;&nbsp;theme by
      <a-link href="https://twitter.com/meduzen">Meduzen</a-link>
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

import ALink from '@/components/ui/ALink.vue'

export default Vue.extend({
  name: 'Footer',

  components: {
    ALink,
  },
})
</script>
