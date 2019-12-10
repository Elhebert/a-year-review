<template>
  <h1 class="text-default text-5xl tracking-wide my-8 font-thin">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Heading'
})
</script>
