<template>
  <div class="font-sans flex flex-col min-h-screen">
    <header class="text-center mx-4">
      <h-one>
        2019 in reviews
      </h-one>

      <client-only>
        <theme-switcher class="absolute top-0 right-0 m-8" />
      </client-only>
    </header>

    <nuxt />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Footer from '@/components/Footer.vue'
import HOne from '@/components/ui/HOne.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Footer,
    HOne,
    ThemeSwitcher,
  },
})
</script>
