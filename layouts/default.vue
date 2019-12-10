<template>
  <div class="font-sans flex flex-col min-h-screen">
    <Container>
      <Heading>
        2019 in reviews
      </Heading>
    </Container>

    <nuxt />

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Container from '@/components/ui/Container.vue'
import Footer from '@/components/Footer.vue'
import Heading from '@/components/ui/Heading.vue'

export default Vue.extend({
  name: 'Home',
  components: {
    Container,
    Footer,
    Heading
  }
})
</script>
