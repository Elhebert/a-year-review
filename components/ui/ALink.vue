<template>
  <a class="text-default hover:no-underline">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ALink',
})
</script>
