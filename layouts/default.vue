<template>
  <div class="font-sans flex flex-col min-h-screen">
    <div class="text-center container max-w-2xl mx-auto">
      <h-one>
        2019 in reviews
      </h-one>
    </div>

    <nuxt />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Footer from '@/components/Footer.vue'
import HOne from '@/components/ui/HOne.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Footer,
    HOne,
  },
})
</script>
