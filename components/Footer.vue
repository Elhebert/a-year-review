<template>
  <footer class="w-full text-center text-default p-16 bg-dimmed">
    <p class="mb-4">
      Made by
      <a
        class="text-default hover:no-underline"
        href="https://www.dieterstinglhamber.me"
        >Elhebert</a
      >
      using&nbsp;<a
        class="text-default hover:no-underline"
        href="https://tailwindcss.com"
        >Tailwind CSS</a
      >, powered by&nbsp;<a
        class="text-default hover:no-underline"
        href="https://nuxtjs.org"
        >Nuxt.js</a
      >
      and hosted on&nbsp;<a
        class="text-default hover:no-underline"
        href="https://www.netlify.com"
        >Netlify</a
      >.
    </p>
    <p>
      Design by
      <a
        class="text-red hover:no-underline"
        href="https://www.dieterstinglhamber.me"
        >Elhebert</a
      >&nbsp;&amp;&nbsp;theme by
      <a class="text-red hover:no-underline" href="https://twitter.com/meduzen"
        >Meduzen</a
      >
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer'
})
</script>
