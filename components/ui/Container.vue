<template>
  <main class="container max-w-2xl mx-auto">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Container'
})
</script>
